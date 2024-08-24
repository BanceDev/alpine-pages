function n(e){let o=0;e.directive("page",a=>{let t=e.$data(a),s="scope-"+Date.now()+"-"+o;if(o++,!t||typeof t.page!="function")throw new Error("Alpine data must have a 'page' function");typeof t.styles=="function"&&e.effect(()=>{let c=t.styles().replace(/(^|\})\s*([^{\s]+)\s*{/g,(d,r,f)=>`${r} [data-scope="${s}"] ${f} {`);a.innerHTML+=`
        <style>
          ${c}
        </style>
        `}),e.effect(()=>{a.innerHTML+=`
      <div data-scope="${s}">
        ${t.page()}
      </div>
      `})})}var y=n;export{y as default};
