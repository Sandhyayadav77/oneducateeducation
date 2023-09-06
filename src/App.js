
import { Route, Routes , Navigate} from 'react-router-dom'
import Home from './Pages/Home';
import Contact from './components/Contact';
import Header from './components/Header';
import Books from './Category/Books';
import Footer from './components/Footer';
import Nursery from './Books/Nursery/Nursery';
import Lkg from './Books/LKG/Lkg';
import Ukg from './Books/Ukg/Ukg';
import Class1 from './Books/Class1/Class1';
import Class2 from './Books/Class2/Class2';
import Class3 from './Books/Class3/Class3';
import Class4 from './Books/Class4/Class4';
import Class5 from './Books/Class5/Class5';
import Class6 from './Books/Class6/Class6';
import Class7 from './Books/Class7/Class7';
import Class8 from './Books/Class8/Class8';
import NurseryData from './Books/Nursery/Nursery.json'
import Class1Data from './Books/Class1/Class1.json'
import Class2Data from './Books/Class2/Class2.json'
import ChapterVideo from './components/ChapterVideo';
// import ChapterPdf from './components/ChapterPdf';
import PDFPage from './components/PDFPage';
import PdfViewerPage from './components/PdfViewerPage';
import NotFound from './components/NotFound';

// console.log(Class2Data)
// console.log(NurseryData)
function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/contact" />
        <Route exact path="/category/books" Component={Books} />
        <Route exact path="/books/nursery" Component={Nursery} />
        <Route exact path="/books/lkg" Component={Lkg} />
        <Route exact path="/books/Ukg" Component={Ukg} />
        <Route exact path="/books/1" Component={Class1} />
        <Route exact path="/books/2" Component={Class2} />
        <Route exact path="/books/3" Component={Class3} />
        <Route exact path="/books/4" Component={Class4} />
        <Route exact path="/books/5" Component={Class5} />
        <Route exact path="/books/6" Component={Class6} />
        <Route exact path="/books/7" Component={Class7} />
        <Route exact path="/books/8" Component={Class8} />
        <Route
        exact   path="/pdf/:className/:subjectName/:fileId"
          element={<PdfViewerPage />}
        />
         <Route path="not-found" element={<NotFound />} /> 
         <Route exact path="*" element={<Navigate to="/not-found" />} />
        {/* <Route exact path="/books/pdf" Component={ChapterPdf} /> */}
        {/* nursery route */}
       {/* {
        NurseryData.map((data)=> <Route key={data.id} path={`/videos/${data.BookNameurl}`} exact element={<ChapterVideo videoId={data.src}/>}/>)
       } */}
       {/* class 1 */}
       {
        Class1Data.map((data)=> <Route key={data.id} path={`/videos/${data.BookNameurl}`} exact element={<ChapterVideo videoIds={data.src}/>}/>)
       }
       {/* class 2 */}
       {
        Class2Data.map((data)=> <Route key={data.id} path={`/videos/${data.BookNameurl}`} exact element={<ChapterVideo videoIds={data.src}/>}/>)
       }
      </Routes>
      <Contact />
      <Footer/>

    </>

  )
}

export default App;
