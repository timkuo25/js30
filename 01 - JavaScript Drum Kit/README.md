- Query selector may select elements using css selector syntax
    - Attribute selector syntax: {selector}[{attribute_name}="{value}"]
- Handle unwanted keydown exceptions
- Set currentTime (attribute of interface HTMLMediaElement) to 0 to play same audio constantly
- setTimeout is not recommended here since it affects transition
    - Instead, use transition end event
