# Shopping list app

Based on set of guiding rules:
Initialize your project with create-react-app and styled-components, you may use additional libraries as desired. After setting up the repository, build an interface with the following features:
A text input, a “create button”, a list of pending items, and a list of crossed-off items. In each list items are sorted alphabetically.
Typing in the text input filters the lists of items below based on substring match
Clicking the create button adds a pending list item with the text from the input and clears the input
Clicking a pending item moves it to the crossed off section. Clicking a crossed off item moves it to pending.
Create an interface for editing additional metadata for each item, add metadata: category, quantity, and price. All three are optional inputs.
Quantity and price should be displayed in the list with the items
Pending items should be grouped by category, while crossed off items remain in one list
Display a subtotal (sum of all prices) in the pending list.

# Check out a live link:

# Remarks

- Very minimal styling and layouting was applied, this was strictly intended to highlight functionality
- By following prompts above literally and in the sequence given, creates an awkward UX e.g. user needs to create item first and can then edit and add quantity, price, etc.
- Grouping by category was omitted since it was one of the last steps. It is straightforward, but needs quite a bit of refactoring at this point, preferably to change data structure to make items into separate objects where category is the key to make a more iterable.
- No time was spent to refactor code that might be a bit too lengthy or to split further components out to make code more reusable.
