

# Okiba / PoolSystem
Manages a dinamically grown pool of DOM Elements
import PoolSystem from '@okiba/pool-system'

__



```javascript
const container = document.querySelector('#container')

function createEl(){
 return document.createElement('img');
}

const pool = new PoolSystem(container, createEl)
```



### Installation

```bash
npm i --save @okiba/pool-system
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/pool-system/index.js"></script>
```

## Usage

```javascript
import PoolSystem from '@okiba/pool-system'
```

#### Untranspiled code 🛑
Okiba Core packages are not transpiled, so _don't forget to transpile them with your favourite bundler_.
For example, using Babel with Webpack, you should prevent imports from okiba to be excluded from transpilation, like follows:

```javascript
{
  test: /\.js$/,
  exclude: /node_modules\/(?!(@okiba)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```







## constructor(parent, createEl)









#### Arguments


##### + `parent`: `Object`

DOM Element used as container for all pool elements.


##### + `createEl`: `function`

Function that creates an istance the element you want to add to the pool.





## ensure(size)


Makes sure the pool can host a minimum number of elements,
grows it if that's not the case.







#### Arguments


##### + `size`: `Number`

Minimum pool size to ensure.





## get()


Hands a free element from the pool.
If there isn't one, it automatically grows the pool's.
This provides dynamic sizing which ensures







#### Returns

`Element` A free DOM Element
## free(Element)


Marks an element as elegible for reutilization,
and pushes it into the pool







#### Arguments


##### + `Element`: `Element`

to mark as free





## destroy()


Nulls all references to DOM Elements






