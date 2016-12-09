# Easy Bootstrap Select

## Usage

Include the following in your document.

```html
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="main.css">
<script src="script.js" charset="utf-8"></script>
```
Next create a regular select.

```html
<select>
  <option>hi</option>
  <option disabled>hello</option>
</select>
```

Then wrap it in a div with the class of ```.replaceSelect```
```html
  <div class="replaceSelect">
    <select>
      <option>hi</option>
      <option disabled>hello</option>
    </select>
  </div>
```
Thats it.
