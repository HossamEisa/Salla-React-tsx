import "./App.css";
import Footer from "./views/layout/Footer";
import Header from "./views/layout/Header";
import { Outlet } from "react-router-dom";
// import { SimpleLitComponentReact } from "./component/lit-components/SimpleLitComponentReact";
// import { useEffect, useState } from "react";
// import { MyPanalComponentReact } from "./component/lit-components/MyPanalLitComponentReact";

function App() {

  // const [title, onSetTitle] = useState<string>('');
  // const [icon, onSetIcon] = useState<string>('-');
  // useEffect(() => {
  //   onSetTitle('Ali')
  // }, []);
  // const handleOnIconClick = () => {
  //   if(title == 'Hossam') {
  //     onSetTitle('Ahmed')
  //     onSetIcon("+")


  //   } else {
  //     onSetTitle('Hossam')
  //     onSetIcon("-")
  //   }
    
  // }
  return (
    <>
      <Header />
      <main className="w-full main flex-auto mt-5 lg:mt-12">
        <div className="container">
          {/* <MyPanalComponentReact onClick={()=> handleOnIconClick()}  className="mb-10 block" title={title} icon={icon}>
            <p className="bg-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum eligendi nulla corrupti. Quaerat dolore perspiciatis facilis itaque omnis nostrum excepturi nobis voluptates voluptas totam, repellendus voluptatibus dolores eligendi distinctio?</p>
          </MyPanalComponentReact>

          <MyPanalComponentReact onClick={()=> console.log('ss')}  className="mb-10 block" title="Ibrahiem" icon={icon}>
            <p className="bg-slate-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum eligendi nulla corrupti. Quaerat dolore perspiciatis facilis itaque omnis nostrum excepturi nobis voluptates voluptas totam, repellendus voluptatibus dolores eligendi distinctio?</p>
          </MyPanalComponentReact> */}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
