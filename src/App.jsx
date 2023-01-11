import Search from './components/Search';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Search />
      </div>
    </QueryClientProvider>
  );
}

export default App;
