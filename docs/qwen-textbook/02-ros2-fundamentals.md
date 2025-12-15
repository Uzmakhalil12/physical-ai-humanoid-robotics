---
title: ROS2 Fundamentals
sidebar_position: 2
description: Understanding Robot Operating System 2 for Physical AI systems
---

# Chapter 2: ROS2 Fundamentals

## Learning Objectives
- Understand the architecture of ROS2
- Identify core concepts and components
- Learn to implement basic ROS2 nodes and communication patterns

## Introduction
Robot Operating System 2 (ROS2) provides the middleware foundation for many Physical AI systems. Unlike traditional frameworks, ROS2 is designed specifically for distributed robotics applications where components may run on different machines or processes, with real-time constraints and fault tolerance requirements.

## ROS2 Architecture
### DDS-Based Communication
ROS2 uses Data Distribution Service (DDS) as its communication layer, which enables:
- Real-time communication with deterministic behavior
- Language independence (C++, Python, Rust, etc.)
- Distributed system design
- Quality of Service (QoS) policies for different communication needs

### Nodes and Processes
In ROS2, nodes are processes that perform computation. Each node runs independently and communicates with others through topics, services, or actions. This design promotes modularity and fault isolation, which are crucial for Physical AI systems operating in the real world.

### Packages and Workspaces
ROS2 organizes code in packages, which are grouped in workspaces. This structure enables:
- Code reuse across multiple projects
- Dependency management
- Version control integration
- Build system optimization

## Core Communication Patterns
### Topics and Publishers/Subscribers
Topics enable asynchronous, one-way communication between nodes using a publish/subscribe model:

```python
# Example publisher node
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1
```

### Services and Clients
Services provide synchronous request/response communication patterns suitable for operations that must complete before the calling node can proceed.

### Actions
Actions support long-running tasks with feedback and goal preemption, essential for Physical AI systems that must handle ongoing physical operations.

## Quality of Service (QoS) Settings
QoS policies in ROS2 allow fine-tuning of communication behavior for different requirements:

- Reliability: Ensure delivery or allow for best-effort
- Durability: Maintain messages for late-joining subscribers
- Deadline: Specify maximum time between publications
- Lifespan: Set maximum message age

## Launch Systems
ROS2 provides launch files to manage complex multi-node systems:

```xml
<launch>
  <node pkg="demo_nodes_cpp" exec="talker" name="my_talker" />
  <node pkg="demo_nodes_py" exec="listener" name="my_listener" />
</launch>
```

This system enables:
- Process management
- Parameter configuration
- Conditional launching
- Error handling

## Practical Considerations for Physical AI
### Timing and Synchronization
Physical AI systems often require precise timing and synchronization between perception, planning, and control loops. ROS2's time system and QoS policies help manage these requirements.

### Safety and Fault Tolerance
Physical AI systems operate in real-world environments where failures can have serious consequences. ROS2 provides tools for:
- Graceful degradation
- Recovery strategies
- System monitoring

### Performance Optimization
Efficient communication is essential in Physical AI systems with limited computational resources. Techniques include:
- Message filtering
- Connection-based message throttling
- Data serialization optimization

## Chapter Summary
ROS2 provides the essential communication infrastructure for Physical AI systems, enabling distributed, real-time, and reliable operation. Understanding its architecture and communication patterns is crucial for developing effective Physical AI implementations.

## Exercises
1. Create a simple ROS2 package with a publisher and subscriber
2. Implement a service for requesting robot status information
3. Explore different QoS settings and their impact on communication

## Further Reading
- ROS2 documentation and tutorials
- "Programming Robots with ROS" by Morgan Quigley
- Papers on ROS2 real-time performance and safety