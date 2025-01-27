# React useEffect Hook: Memory Leak with setInterval

This example demonstrates a common mistake when using the `useEffect` hook in React: forgetting to clean up after `setInterval`.  The `setInterval` function continues to run even after the component is unmounted, leading to a memory leak.

## Problem

The `setInterval` function inside the `useEffect` hook is not properly cleaned up.  This results in a memory leak because the interval keeps running even after the component is removed from the DOM.

## Solution

The solution involves returning a cleanup function from the `useEffect` hook. This function will be called automatically when the component unmounts, ensuring that `clearInterval` is called to stop the interval.
