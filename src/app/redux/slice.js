const { createSlice} = require("@reduxjs/toolkit");

const initialState={
   article:{}
}

const Slice = createSlice({
      name:'getCurrArticle',
      initialState,
      reducers:{
            getArticle:(state,action)=>{
                  const data = action.payload
                  state.article ={...data};
            }
      }
});

export const {getArticle}=Slice.actions;
export default Slice.reducer