import React, { useState } from 'react'
import { useGetsubCategoriesQuery } from '../../api/todos'

const Magazin = () => {



        const [modal, setModal] = useState<boolean>(false);
        const [text, setText] = useState<string>("");
        const [text1, setText1] = useState<string>("");
        const [text2, setText2] = useState<string>("");
        const [text3, setText3] = useState<string>("");
        const [Brand, setBrand] = useState<string>("");
        const [Cotegory, setCotegory] = useState<string>("");
        const [idx, setIdx] = useState<number | null>(null);

        const handleEdit = (e) => {
          setModal(true);
          setIdx(e.id);
          setText(e.imya);
          setText1(e.familiya);
          setText2(e.narx);
          setText3(e.img);
          setBrand(e.Brand);
          setCotegory(e.Cotegory);
        };

    const {data=[]} = useGetsubCategoriesQuery("")
  return (
      <div>
          {
              data.map((e) => {
                  return (
                      <div>
                       <input value={text} type="text" name="" id="" />   
                      </div>
                  )
              })
      }
      <input type="text" value={text} name="" id="" />
    </div>
  )
}

export default Magazin