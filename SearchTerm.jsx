import React, {useState,useEffect} from 'react';
import $ from 'jquery';

const SearchHightlight={
    const [searchTerm, setSearchTerm] = useState('');

const handleChange=(e)=>{
    setSearchTerm(e.target.value);
}

useEffect(()=>{
    if(searchTerm){
        highLightText(searchTerm);
    }
    else{
        clearHighLight(searchTerm);
    }
},[searchTerm])

   const highLightText=(term)=>{
$('body').each(function(){
    const text=$(this).html();
    const regex=new RegExp('{$term}','gi');
const highLightedText=text.replace(regex,`<span class="highlight">'{$term}</span>`)
$(this).html(highLightedText);
})
   }

   const clearHighLightText = function () {
    $('span.highlight').contents().unwrap();
}


return(
    <>
    <style>
    .highlight:{
        backgroundcolor:yellow
    }
    </style>
    <input
    type='text'
    value={searchTerm}
    onChange={handleChange}
   >
   </>
)
};