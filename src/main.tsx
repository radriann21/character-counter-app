import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { WordCounterProvider } from "@/context/WordCounterContext.tsx"
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <WordCounterProvider>
        <App />
      </WordCounterProvider>
    </Provider>
  </StrictMode>,
)
