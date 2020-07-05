setcion .data
	msg db "Hello World"

section .text
	global _start

start:
	mov rax, 1
	mov rdi, 1

