(defun hello-you (x)
    (format t "Hello ~a!~%" x))

(format t "What is your name~%")
(defvar *name* (read-line))
(hello-you *name*)

