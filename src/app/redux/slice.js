const { createSlice,nanoid } = require("@reduxjs/toolkit");

const initialState={
   article:{}
}

const Slice = createSlice({
      name:'getCurrArticle',
      initialState,
      reducers:{
            getArticle:(state,action)=>{
                  const data = {
                        id:nanoid(),
                        currarticle:action.payload
                  }
                  state.article ={...data};
            }
      }
});

export const {getArticle}=Slice.actions;
export default Slice.reducer