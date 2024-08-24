function f(e){let o=0;e.directive("page",a=>{let t=e.$data(a),n="scope-"+Date.now()+"-"+o;if(o++,!t||typeof t.page!="function")throw new Error("Alpine data must have a 'page' function");typeof t.styles=="function"&&e.effect(()=>{a.innerHTML+=`
        <style>
          [data-scope="${n}"] {
            ${t.styles()}
          }
        </style>
        `}),e.effect(()=>{a.innerHTML+=`
      <div data-scope="${n}">
        ${t.page()}
      </div>
      `})})}var s=f;export{s as default};
