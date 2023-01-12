---
title: Performance Considerations
sidebar_position: 6
---
We researched and compared the performance of containers running in Beiboot clusters vs. the respective host cluster.

## Benchmark setup
The following benchmarks have been conducted with the following setup:
* Host cluster: Google Kubernetes Engine
  * Region: europe-north1
  * Machine type: e2-standard-2
  * OS image: Container-Optimized OS from Google
  * Container runtime version: containerd://1.5.13
  * Ephemeral storage (per node): 100GB
* Beiboot:
  * Operator version: 1.2.0
  * Provider: *k3s*
  * One-node cluster (created with `--nodes 1`)
* There was no other load in the test cluster


The benchmark suite for running these tests was [k8s-perf with sysbench](https://github.com/Schille/k8s-perf).

## CPU Performance
Summary: the CPU of a container in Beiboot does not perform significantly slower than the host cluster.  
The `sysbench` command parameters for the CPU tests: `sysbench --test=cpu --time=60 run`

![CPU comparison events per second](/img/perf_cpu_eventss.png)
![CPU comparison latency](/img/perf_cpu_latency.png)

## Memory Performance
Summary: the memory of a container in Beiboot does not perform significantly slower than the host cluster.  
The `sysbench` command parameters for the CPU tests: `sysbench --test=memory --memory-total-size=500G run`

![Memory write comparison](/img/perf_memory_write.png)
![Memory latency comparison](/img/perf_memory_latency.png)

## File I/O Performance
Summary: the file operations of a container in Beiboot do not perform significantly slower than the host cluster.  
The `sysbench` command parameters for the CPU tests: `sysbench --test=fileio --file-num=5 --file-total-size=5G prepare && sysbench --test=fileio --file-total-size=5G --file-num=5 --file-test-mode=rndrw --time=100 --max-requests=0 run`

![File latency comparison](/img/perf_file_latency.png)
![File io comparison](/img/perf_file_io.png)
![File throughput comparison](/img/perf_file_throughput.png)





