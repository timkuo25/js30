- Bubbling: Down -> Up.

- Browser *Captures* the event from up to down, then fires events by bubbling up

- addEventListener(type, listener, *useCapture*)
    - capture: use capturing, default false
    - one: Remove event listener (unbind itself)

- e.stopPropagation() stops propagation or bubbling.
