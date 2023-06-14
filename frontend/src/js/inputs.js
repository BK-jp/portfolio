const Inputs = () => {
    const texts = document.querySelectorAll('.text');

    texts.forEach((text)=>{
        const parent = text.parentNode;
        const wrapper = document.createElement('div');
        wrapper.classList.add('tx-wrap');

        parent.replaceChild(wrapper, text);
        wrapper.appendChild(text);

        const placeholder = text.dataset.placeholder;

        if(placeholder != undefined){
            const placeholderDom = document.createElement('div');
            placeholderDom.classList.add('placeholder');

            placeholderDom.innerText = placeholder;
            wrapper.appendChild(placeholderDom);
            placeholderDom.onclick = ()=>{
                text.focus();
            }

            text.oninput = ()=>{
                if(text.value != '') placeholderDom.classList.add('active');
                else placeholderDom.classList.remove('active');
            }
        }
    });
}

export default Inputs;