# Build Lute Library Scripts

## Usage

### Install NPM dependencies
you'll first need to ensure that you have Node JS or equivelent that is capable of working with NPM packages. You can then run a simple NPM install to get the needed packages to perform the build.

```shell
~ cd /lutesj
~/lutejs$ npm install
```

If the install succeeded simply run the build script with
```shell
~/lutejs$ npm run build
```

The script will use ESBuild to build the needed libraries


### Create an import map in your html to hold the modules
Lets say you were going to use the built libraries Jquery and Data-Tables. You can add them to a site wide import map like so.
```html
<script type="importmap">
{
  "imports": {
    "jquery": "/dist/jquery.mjs",
    "datatables.net-dt": "/dist/datatables.mjs"
  }
}
</script>
```

### Use the modules in your script
Now you can import any of the exports from the libraries as usual in your scripts.
```javascript
<script type="module">
  import $ from 'jquery';
  import DataTable from 'datatables.net-dt';

  // Your code here
  let el = $('.myclass');
  ...
</script>
```