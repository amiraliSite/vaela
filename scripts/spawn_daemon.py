#!/usr/bin/env python3
"""Detach a long-running subprocess as a true daemon (not tied to the calling shell).

Usage: spawn_daemon.py <PIDFILE> <LOGFILE> <WORKDIR> <CMD> [ARGS...]
"""
import os
import sys
import time
import resource

def main():
    if len(sys.argv) < 5:
        print("Usage: spawn_daemon.py <PIDFILE> <LOGFILE> <WORKDIR> <CMD> [ARGS...]")
        sys.exit(2)

    pidfile = sys.argv[1]
    logfile = sys.argv[2]
    workdir = sys.argv[3]
    cmd = sys.argv[4:]

    # First fork
    try:
        pid = os.fork()
    except OSError as e:
        print(f"first fork failed: {e}")
        sys.exit(1)

    if pid > 0:
        # Original parent: wait for daemon to write its pid, then print it
        for _ in range(80):
            try:
                with open(pidfile) as f:
                    daemon_pid = f.read().strip()
                    if daemon_pid:
                        print(daemon_pid)
                        return
            except FileNotFoundError:
                pass
            time.sleep(0.1)
        print("daemon may have failed to start")
        return

    # First child: decouple from parent environment
    try:
        os.setsid()
    except OSError:
        pass

    # Second fork (ensure daemon can never reacquire a controlling terminal)
    try:
        pid = os.fork()
    except OSError:
        os._exit(1)
    if pid > 0:
        os._exit(0)

    # Now in the true daemon
    os.chdir(workdir)  # use the provided workdir
    os.umask(0)

    # Close all open file descriptors
    maxfd = resource.getrlimit(resource.RLIMIT_NOFILE)[1]
    if maxfd == resource.RLIM_INFINITY:
        maxfd = 1024
    for fd in range(maxfd):
        try:
            os.close(fd)
        except OSError:
            pass

    # Reopen stdin, stdout, stderr to the log file
    with open(logfile, "a") as log:
        os.dup2(log.fileno(), 0)
        os.dup2(log.fileno(), 1)
        os.dup2(log.fileno(), 2)

    # Write the daemon pid
    with open(pidfile, "w") as f:
        f.write(str(os.getpid()))

    # Exec the actual command (replaces the daemon process)
    os.execvp(cmd[0], cmd)

if __name__ == "__main__":
    main()
