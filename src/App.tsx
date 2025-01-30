import { FC } from 'react'

const App: FC = () => {
  useEffect(() => {
    document.title = "BHS Code Club Hackathon";
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4">
        <h1 className="text-white text-2xl font-bold">BHS Code Club Hackathon</h1>
      </nav>
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Us on March 8!</h2>
          
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-3">What is a Hackathon?</h3>
            <p className="text-gray-700 mb-4">
              A hackathon is a fun coding event where people come together to turn their creative 
              ideas into real projects! Whether you're just starting to code or you're an experienced 
              programmer, this is your chance to collaborate with fellow students and build something awesome 
              in just 6 hours. 
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">What You'll Do</h3>
            <div className="space-y-3 text-gray-700">
              <p>• Team up with other students and brainstorm cool project ideas</p>
              <p>• Build a working project in just one day</p>
              <p>• Share your creation with everyone at the end</p>
              <p>• Meet other students who love coding</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
