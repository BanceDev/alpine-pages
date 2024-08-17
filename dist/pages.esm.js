function f(e){e.directive("page",a=>{let t=e.$data(a),o="scope-"+Date.now()+"-"+Math.floor(Math.random()*1e3);if(!t||typeof t.page!="function")throw new Error("Alpine data must have a 'page' function");typeof t.styles=="function"&&e.effect(()=>{a.innerHTML+=`
        <style>
          [data-scope="${o}"] {
            ${t.styles()}
          }
        </style>
        `}),e.effect(()=>{a.innerHTML+=`
      <div data-scope="${o}">
        ${t.page()}
      </div>
      `})})}var r=f;export{r as default};
