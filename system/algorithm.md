# 算法


## louds-rs

High performance LOUDS (Level-Order Unary Degree Sequence) library.

https://github.com/laysakura/louds-rs

## fid-rs

High performance FID (Fully Indexable Dictionary) library.

https://github.com/laysakura/fid-rs

## simdjson

JSON is everywhere on the Internet. Servers spend a *lot* of time parsing it. We need a fresh approach. The simdjson library uses commonly available SIMD instructions and microparallel algorithms to parse JSON 2.5x faster than anything else out there.
- Fast: Over 2.5x faster than other production-grade JSON parsers.
- Easy: First-class, easy to use API.
- Strict: Full JSON and UTF-8 validation, lossless parsing. Performance with no compromises.
- Automatic: Selects a CPU-tailored parser at runtime. No configuration needed.
- Reliable: From memory allocation to error handling, simdjson's design avoids surprises.
This library is part of the Awesome Modern C++ list.

https://github.com/simdjson/simdjson

## libsigsegv

GNU libsigsegv is a library for handling page faults in user mode. A page fault occurs when a program tries to access to a region of memory that is currently not available. Catching and handling a page fault is a useful technique for implementing:

- pageable virtual memory,
- **memory-mapped access to persistent databases**,
- generational garbage collectors,
- stack overflow handlers,
- distributed shared memory

http://www.gnu.org/software/libsigsegv/