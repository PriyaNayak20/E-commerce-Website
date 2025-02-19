import './App.css'
import { sampleProdcts } from './data'

function App() {
  return (
    <>
      <div>
        <header>FashionFusion</header>
        <main>
          <ul>
            {sampleProdcts.map((products) => (
              <li key={products.slug}>
                <h2>{products.name}</h2>
                <img
                  src={products.image}
                  alt={products.name}
                  className="product-image"
                />
                <p>${products.price}</p>
              </li>
            ))}
          </ul>
        </main>
        <footer>All the rights</footer>
      </div>
    </>
  )
}

export default App
