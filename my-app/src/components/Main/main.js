import './main.css';
import Loader from  '../loader/loader'
// import { useState, useEffect } from 'react';


function Main(props) {
    let {darkmode, Filter} = props

    const changeValue = (el) => {
        Filter(el.innerText)
    }

    let arr = Filter()?.map(item =>{
        return(
            <div className='card'>
                        <div className='card__img'>
                            <img src= {item.img} alt="markaz image"/>
                        </div>
                        <div className='card__info'>
                            <h1 className='card__info__name'>
                                {item.name} o'quv markazi
                            </h1>
                            <p className='card__info__adress'>
                                {item.address}
                            </p>
                            <p className='card__info__inf'>
                                {item.info}
                            </p>
                        </div>
                        <div className='card__info2'>
                            <div className='card__phone'>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M8.26 1.289l-1.564.772c-5.793 3.02 2.798 20.944 9.31 20.944.46 0 .904-.094 1.317-.284l1.542-.755-2.898-5.59-1.54.754c-.181.087-.384.134-.597.134-2.561 0-6.841-8.204-4.241-9.596l1.546-.763-2.875-5.612zm7.746 22.711c-5.68 0-12.221-11.114-12.221-17.832 0-2.419.833-4.146 2.457-4.992l2.382-1.176 3.857 7.347-2.437 1.201c-1.439.772 2.409 8.424 3.956 7.68l2.399-1.179 3.816 7.36s-2.36 1.162-2.476 1.215c-.547.251-1.129.376-1.733.376"/></svg>
                                {item.phone}
                            </div>
                            <div className='card__work__time'>
                                <svg width="24" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="timer"><rect width="24" height="24" fill="none"></rect><circle cx="128" cy="140" r="88" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></circle><line x1="128" x2="161.941" y1="140" y2="106.059" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="104" x2="152" y1="12" y2="12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>         <div >
                                    Ish vaqti: {item.working_time}<br/>
                                    Tushlik: 12:00 - 13:00
                                </div>
                            </div>
                            <div className = "card__working__data">
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" width="24" height="24" viewBox="0 0 512 512" id="time-management"><path fill="#fff" d="M387.495,92.395v292.119c0,8.632-7.001,15.633-15.634,15.633H19.633c-8.633,0-15.634-7.001-15.634-15.633V92.395c0-8.632,7.001-15.633,15.634-15.633H371.86C380.493,76.761,387.495,83.762,387.495,92.395z"></path><path fill="#fb8a8a" d="M387.495,144.387V92.395c0-8.632-7.001-15.633-15.634-15.633H19.633c-8.633-0.001-15.634,7-15.634,15.633v51.992h383.495V144.387z"></path><path fill="#fcb1b1" d="M387.501,92.381v16.123c0-8.645-7.004-15.613-15.649-15.613H19.648c-8.645,0-15.649,6.967-15.649,15.613V92.381c0-8.609,7.004-15.613,15.649-15.613H371.85C380.496,76.768,387.501,83.771,387.501,92.381z"></path><rect width="383.501" height="16.087" x="3.999" y="128.3" fill="#f96363"></rect><path fill="#d3d8d9" d="M94.101,256.608v31.335c0,4.742-3.866,8.609-8.645,8.609H35.735c-4.778,0-8.608-3.867-8.608-8.609v-31.335c0-4.779,3.83-8.646,8.608-8.646h49.721C90.235,247.962,94.101,251.829,94.101,256.608z"></path><path fill="#fee8b3" d="M94.101 331.79v31.299c0 4.779-3.866 8.645-8.645 8.645H35.735c-4.778 0-8.608-3.866-8.608-8.645V331.79c0-4.778 3.83-8.645 8.608-8.645h49.721C90.235 323.145 94.101 327.012 94.101 331.79zM184.205 181.426v31.335c0 4.742-3.867 8.608-8.646 8.608h-49.72c-4.779 0-8.646-3.867-8.646-8.608v-31.335c0-4.778 3.867-8.645 8.646-8.645h49.72C180.338 172.78 184.205 176.647 184.205 181.426z"></path><path fill="#d3d8d9" d="M184.205 256.608v31.335c0 4.742-3.867 8.609-8.646 8.609h-49.72c-4.779 0-8.646-3.867-8.646-8.609v-31.335c0-4.779 3.867-8.646 8.646-8.646h49.72C180.338 247.962 184.205 251.829 184.205 256.608zM184.205 331.79v31.299c0 4.779-3.867 8.645-8.646 8.645h-49.72c-4.779 0-8.646-3.866-8.646-8.645V331.79c0-4.778 3.867-8.645 8.646-8.645h49.72C180.338 323.145 184.205 327.012 184.205 331.79zM274.27 181.426v31.335c0 4.742-3.83 8.608-8.608 8.608h-49.721c-4.779 0-8.645-3.867-8.645-8.608v-31.335c0-4.778 3.866-8.645 8.645-8.645h49.721C270.44 172.78 274.27 176.647 274.27 181.426zM274.27 256.608v31.335c0 4.742-3.83 8.609-8.608 8.609h-49.721c-4.779 0-8.645-3.867-8.645-8.609v-31.335c0-4.779 3.866-8.646 8.645-8.646h49.721C270.44 247.962 274.27 251.829 274.27 256.608zM274.27 331.79v31.299c0 4.779-3.83 8.645-8.608 8.645h-49.721c-4.779 0-8.645-3.866-8.645-8.645V331.79c0-4.778 3.866-8.645 8.645-8.645h49.721C270.44 323.145 274.27 327.012 274.27 331.79zM364.372 181.426v31.335c0 4.742-3.866 8.608-8.608 8.608h-49.721c-4.779 0-8.645-3.867-8.645-8.608v-31.335c0-4.778 3.866-8.645 8.645-8.645h49.721C360.506 172.78 364.372 176.647 364.372 181.426zM364.372 256.608v31.335c0 4.742-3.866 8.609-8.608 8.609h-49.721c-4.779 0-8.645-3.867-8.645-8.609v-31.335c0-4.779 3.866-8.646 8.645-8.646h49.721C360.506 247.962 364.372 251.829 364.372 256.608z"></path><path fill="#ededed" d="M94.101,256.608v13.314c0-4.779-3.866-8.645-8.645-8.645H35.735c-4.778,0-8.608,3.866-8.608,8.645v-13.314c0-4.779,3.83-8.646,8.608-8.646h49.721C90.235,247.962,94.101,251.829,94.101,256.608z"></path><path fill="#fff4d9" d="M94.101 331.79v13.315c0-4.779-3.866-8.646-8.645-8.646H35.735c-4.778 0-8.608 3.867-8.608 8.646V331.79c0-4.778 3.83-8.645 8.608-8.645h49.721C90.235 323.145 94.101 327.012 94.101 331.79zM184.205 181.426v13.315c0-4.778-3.867-8.645-8.646-8.645h-49.72c-4.779 0-8.646 3.867-8.646 8.645v-13.315c0-4.778 3.867-8.645 8.646-8.645h49.72C180.338 172.78 184.205 176.647 184.205 181.426z"></path><path fill="#ededed" d="M184.205 256.608v13.314c0-4.779-3.867-8.645-8.646-8.645h-49.72c-4.779 0-8.646 3.866-8.646 8.645v-13.314c0-4.779 3.867-8.646 8.646-8.646h49.72C180.338 247.962 184.205 251.829 184.205 256.608zM184.205 331.79v13.315c0-4.779-3.867-8.646-8.646-8.646h-49.72c-4.779 0-8.646 3.867-8.646 8.646V331.79c0-4.778 3.867-8.645 8.646-8.645h49.72C180.338 323.145 184.205 327.012 184.205 331.79zM274.27 181.426v13.315c0-4.778-3.83-8.645-8.608-8.645h-49.721c-4.779 0-8.645 3.867-8.645 8.645v-13.315c0-4.778 3.866-8.645 8.645-8.645h49.721C270.44 172.78 274.27 176.647 274.27 181.426zM274.27 256.608v13.314c0-4.779-3.83-8.645-8.608-8.645h-49.721c-4.779 0-8.645 3.866-8.645 8.645v-13.314c0-4.779 3.866-8.646 8.645-8.646h49.721C270.44 247.962 274.27 251.829 274.27 256.608zM274.27 331.79v13.315c0-4.779-3.83-8.646-8.608-8.646h-49.721c-4.779 0-8.645 3.867-8.645 8.646V331.79c0-4.778 3.866-8.645 8.645-8.645h49.721C270.44 323.145 274.27 327.012 274.27 331.79zM364.372 181.426v13.315c0-4.778-3.866-8.645-8.608-8.645h-49.721c-4.779 0-8.645 3.867-8.645 8.645v-13.315c0-4.778 3.866-8.645 8.645-8.645h49.721C360.506 172.78 364.372 176.647 364.372 181.426zM364.372 256.608v13.314c0-4.779-3.866-8.645-8.608-8.645h-49.721c-4.779 0-8.645 3.866-8.645 8.645v-13.314c0-4.779 3.866-8.646 8.645-8.646h49.721C360.506 247.962 364.372 251.829 364.372 256.608z"></path><path fill="#a8b1b3" d="M94.101,274.628v13.315c0,4.742-3.866,8.608-8.645,8.608H35.735c-4.778,0-8.608-3.866-8.608-8.608v-13.315c0,4.742,3.83,8.609,8.608,8.609h49.721C90.235,283.237,94.101,279.371,94.101,274.628z"></path><path fill="#fddd8d" d="M94.101 349.774v13.314c0 4.779-3.866 8.646-8.645 8.646H35.735c-4.778 0-8.608-3.867-8.608-8.646v-13.314c0 4.779 3.83 8.645 8.608 8.645h49.721C90.235 358.42 94.101 354.553 94.101 349.774zM184.205 199.446v13.314c0 4.742-3.867 8.609-8.646 8.609h-49.72c-4.779 0-8.646-3.867-8.646-8.609v-13.314c0 4.742 3.867 8.608 8.646 8.608h49.72C180.338 208.055 184.205 204.188 184.205 199.446z"></path><path fill="#a8b1b3" d="M184.205 274.628v13.315c0 4.742-3.867 8.608-8.646 8.608h-49.72c-4.779 0-8.646-3.866-8.646-8.608v-13.315c0 4.742 3.867 8.609 8.646 8.609h49.72C180.338 283.237 184.205 279.371 184.205 274.628zM184.205 349.774v13.314c0 4.779-3.867 8.646-8.646 8.646h-49.72c-4.779 0-8.646-3.867-8.646-8.646v-13.314c0 4.779 3.867 8.645 8.646 8.645h49.72C180.338 358.42 184.205 354.553 184.205 349.774zM274.27 199.446v13.314c0 4.742-3.83 8.609-8.608 8.609h-49.721c-4.779 0-8.645-3.867-8.645-8.609v-13.314c0 4.742 3.866 8.608 8.645 8.608h49.721C270.44 208.055 274.27 204.188 274.27 199.446zM274.27 274.628v13.315c0 4.742-3.83 8.608-8.608 8.608h-49.721c-4.779 0-8.645-3.866-8.645-8.608v-13.315c0 4.742 3.866 8.609 8.645 8.609h49.721C270.44 283.237 274.27 279.371 274.27 274.628zM274.27 349.774v13.314c0 4.779-3.83 8.646-8.608 8.646h-49.721c-4.779 0-8.645-3.867-8.645-8.646v-13.314c0 4.779 3.866 8.645 8.645 8.645h49.721C270.44 358.42 274.27 354.553 274.27 349.774zM364.372 199.446v13.314c0 4.742-3.866 8.609-8.608 8.609h-49.721c-4.779 0-8.645-3.867-8.645-8.609v-13.314c0 4.742 3.866 8.608 8.645 8.608h49.721C360.506 208.055 364.372 204.188 364.372 199.446zM364.372 274.628v13.315c0 4.742-3.866 8.608-8.608 8.608h-49.721c-4.779 0-8.645-3.866-8.645-8.608v-13.315c0 4.742 3.866 8.609 8.645 8.609h49.721C360.506 283.237 364.372 279.371 364.372 274.628z"></path><path fill="#333" d="M85.457 300.553H35.734c-6.953 0-12.609-5.656-12.609-12.609v-31.336c0-6.973 5.656-12.644 12.609-12.644h49.722c6.973 0 12.644 5.672 12.644 12.644v31.336C98.101 294.896 92.429 300.553 85.457 300.553zM35.734 251.963c-2.543 0-4.609 2.082-4.609 4.645v31.336c0 2.543 2.066 4.609 4.609 4.609h49.722c2.562 0 4.645-2.066 4.645-4.609v-31.336c0-2.563-2.082-4.645-4.645-4.645H35.734zM85.457 375.736H35.734c-6.953 0-12.609-5.676-12.609-12.648v-31.297c0-6.973 5.656-12.645 12.609-12.645h49.722c6.973 0 12.644 5.672 12.644 12.645v31.297C98.101 370.06 92.429 375.736 85.457 375.736zM35.734 327.146c-2.543 0-4.609 2.082-4.609 4.645v31.297c0 2.562 2.066 4.648 4.609 4.648h49.722c2.562 0 4.645-2.086 4.645-4.648v-31.297c0-2.563-2.082-4.645-4.645-4.645H35.734zM175.559 225.369h-49.719c-6.973 0-12.648-5.656-12.648-12.609v-31.336c0-6.973 5.676-12.644 12.648-12.644h49.719c6.973 0 12.644 5.672 12.644 12.644v31.336C188.203 219.713 182.532 225.369 175.559 225.369zM125.839 176.78c-2.562 0-4.648 2.082-4.648 4.645v31.336c0 2.543 2.086 4.609 4.648 4.609h49.719c2.562 0 4.645-2.066 4.645-4.609v-31.336c0-2.563-2.082-4.645-4.645-4.645H125.839zM175.559 300.553h-49.719c-6.973 0-12.648-5.656-12.648-12.609v-31.336c0-6.973 5.676-12.644 12.648-12.644h49.719c6.973 0 12.644 5.672 12.644 12.644v31.336C188.203 294.896 182.532 300.553 175.559 300.553zM125.839 251.963c-2.562 0-4.648 2.082-4.648 4.645v31.336c0 2.543 2.086 4.609 4.648 4.609h49.719c2.562 0 4.645-2.066 4.645-4.609v-31.336c0-2.563-2.082-4.645-4.645-4.645H125.839zM175.559 375.736h-49.719c-6.973 0-12.648-5.676-12.648-12.648v-31.297c0-6.973 5.676-12.645 12.648-12.645h49.719c6.973 0 12.644 5.672 12.644 12.645v31.297C188.203 370.06 182.532 375.736 175.559 375.736zM125.839 327.146c-2.562 0-4.648 2.082-4.648 4.645v31.297c0 2.562 2.086 4.648 4.648 4.648h49.719c2.562 0 4.645-2.086 4.645-4.648v-31.297c0-2.563-2.082-4.645-4.645-4.645H125.839zM265.66 225.369h-49.719c-6.973 0-12.644-5.656-12.644-12.609v-31.336c0-6.973 5.672-12.644 12.644-12.644h49.719c6.953 0 12.609 5.672 12.609 12.644v31.336C278.269 219.713 272.613 225.369 265.66 225.369zM215.942 176.78c-2.562 0-4.645 2.082-4.645 4.645v31.336c0 2.543 2.082 4.609 4.645 4.609h49.719c2.543 0 4.609-2.066 4.609-4.609v-31.336c0-2.563-2.066-4.645-4.609-4.645H215.942zM265.66 300.553h-49.719c-6.973 0-12.644-5.656-12.644-12.609v-31.336c0-6.973 5.672-12.644 12.644-12.644h49.719c6.953 0 12.609 5.672 12.609 12.644v31.336C278.269 294.896 272.613 300.553 265.66 300.553zM215.942 251.963c-2.562 0-4.645 2.082-4.645 4.645v31.336c0 2.543 2.082 4.609 4.645 4.609h49.719c2.543 0 4.609-2.066 4.609-4.609v-31.336c0-2.563-2.066-4.645-4.609-4.645H215.942zM265.66 375.736h-49.719c-6.973 0-12.644-5.676-12.644-12.648v-31.297c0-6.973 5.672-12.645 12.644-12.645h49.719c6.953 0 12.609 5.672 12.609 12.645v31.297C278.269 370.06 272.613 375.736 265.66 375.736zM215.942 327.146c-2.562 0-4.645 2.082-4.645 4.645v31.297c0 2.562 2.082 4.648 4.645 4.648h49.719c2.543 0 4.609-2.086 4.609-4.648v-31.297c0-2.563-2.066-4.645-4.609-4.645H215.942zM355.765 225.369h-49.722c-6.973 0-12.645-5.656-12.645-12.609v-31.336c0-6.973 5.672-12.644 12.645-12.644h49.722c6.949 0 12.605 5.672 12.605 12.644v31.336C368.371 219.713 362.714 225.369 355.765 225.369zM306.043 176.78c-2.563 0-4.645 2.082-4.645 4.645v31.336c0 2.543 2.082 4.609 4.645 4.609h49.722c2.539 0 4.605-2.066 4.605-4.609v-31.336c0-2.563-2.066-4.645-4.605-4.645H306.043z"></path><circle cx="404.106" cy="367.141" r="103.893" fill="#7bde9e"></circle><path fill="#a7e9bf" d="M427.69,305.219c0,47.213-38.252,85.507-85.507,85.507c-14.921,0-28.911-3.804-41.126-10.525c-0.55-4.269-0.845-8.622-0.845-13.06c0-57.399,46.536-103.893,103.894-103.893c4.437,0,8.791,0.296,13.06,0.845C423.886,276.309,427.69,290.299,427.69,305.219z"></path><path fill="#50d27e" d="M507.998,367.141c0,57.357-46.494,103.893-103.893,103.893c-37.492,0-70.376-19.908-88.636-49.707c15.766,9.679,34.322,15.259,54.187,15.259c57.399,0,103.894-46.536,103.894-103.894c0-19.865-5.58-38.463-15.301-54.229C488.09,296.681,507.998,329.566,507.998,367.141z"></path><path fill="#333" d="M443.485,409.713c-1.012,0-2.02-0.379-2.797-1.141l-39.379-38.566c-0.77-0.754-1.203-1.785-1.203-2.859v-47.582c0-2.211,1.789-4,4-4c2.211,0,4,1.789,4,4v45.902l38.176,37.387c1.582,1.547,1.605,4.078,0.063,5.656C445.559,409.311,444.524,409.713,443.485,409.713z"></path><circle cx="404.106" cy="367.141" r="12.321" fill="#fff"></circle><path fill="#ededed" d="M416.447,367.141c0,6.805-5.537,12.342-12.342,12.342c-5.115,0-9.51-3.128-11.328-7.608c1.437,0.634,3.043,0.972,4.692,0.972c6.804,0,12.342-5.537,12.342-12.342c0-1.691-0.337-3.297-1.014-4.734C413.277,357.589,416.447,361.985,416.447,367.141z"></path><path fill="#333" d="M404.106 383.462c-9 0-16.32-7.32-16.32-16.32s7.32-16.324 16.32-16.324 16.32 7.324 16.32 16.324S413.106 383.462 404.106 383.462zM404.106 358.818c-4.586 0-8.32 3.734-8.32 8.324 0 4.586 3.734 8.32 8.32 8.32 4.586 0 8.32-3.734 8.32-8.32C412.426 362.552 408.692 358.818 404.106 358.818zM404.106 296.951c-2.211 0-4-1.789-4-4v-8.777c0-2.211 1.789-4 4-4 2.211 0 4 1.789 4 4v8.777C408.106 295.162 406.317 296.951 404.106 296.951zM404.106 454.112c-2.211 0-4-1.789-4-4v-8.781c0-2.211 1.789-4 4-4 2.211 0 4 1.789 4 4v8.781C408.106 452.323 406.317 454.112 404.106 454.112zM456.571 318.685c-1.023 0-2.047-.391-2.828-1.172-1.563-1.562-1.563-4.094 0-5.656l6.207-6.207c1.562-1.563 4.094-1.563 5.656 0 1.562 1.563 1.563 4.094 0 5.656l-6.207 6.207C458.617 318.295 457.594 318.685 456.571 318.685zM345.433 429.807c-1.023 0-2.047-.391-2.828-1.172-1.563-1.562-1.563-4.094 0-5.656l6.207-6.207c1.563-1.563 4.094-1.563 5.656 0 1.562 1.563 1.562 4.094 0 5.656l-6.207 6.207C347.48 429.416 346.457 429.807 345.433 429.807zM487.074 371.146h-8.777c-2.211 0-4-1.789-4-4s1.789-4 4-4h8.777c2.211 0 4 1.789 4 4S489.285 371.146 487.074 371.146zM329.914 371.138h-8.777c-2.211 0-4-1.789-4-4s1.789-4 4-4h8.777c2.211 0 4 1.789 4 4S332.125 371.138 329.914 371.138zM462.766 429.811c-1.023 0-2.047-.391-2.828-1.172l-6.207-6.207c-1.563-1.563-1.563-4.094 0-5.656 1.563-1.562 4.094-1.563 5.656 0l6.207 6.207c1.563 1.563 1.563 4.094 0 5.656C464.813 429.42 463.789 429.811 462.766 429.811zM351.652 318.681c-1.023 0-2.047-.391-2.828-1.172l-6.207-6.207c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0l6.207 6.207c1.562 1.563 1.562 4.094 0 5.656C353.699 318.291 352.675 318.681 351.652 318.681z"></path><g><path fill="#fbb381" d="M90.589 55.809v48.474c0 8.192-6.654 14.846-14.847 14.846-4.114 0-7.834-1.681-10.517-4.364-2.719-2.683-4.364-6.404-4.364-10.482V55.809c0-8.192 6.654-14.846 14.882-14.846 4.079 0 7.799 1.646 10.482 4.364C88.908 48.01 90.589 51.695 90.589 55.809zM206.909 55.809v48.474c0 8.192-6.654 14.846-14.847 14.846-4.114 0-7.834-1.681-10.517-4.364-2.719-2.683-4.364-6.404-4.364-10.482V55.809c0-8.192 6.654-14.846 14.882-14.846 4.079 0 7.799 1.646 10.482 4.364C205.227 48.01 206.909 51.695 206.909 55.809zM323.228 55.809v48.474c0 8.192-6.654 14.846-14.847 14.846-4.114 0-7.834-1.681-10.517-4.364-2.719-2.683-4.364-6.404-4.364-10.482V55.809c0-8.192 6.654-14.846 14.882-14.846 4.079 0 7.799 1.646 10.482 4.364C321.546 48.01 323.228 51.695 323.228 55.809z"></path></g><g><path fill="#fcccab" d="M90.572 55.803v15.813c0-4.115-1.68-7.799-4.363-10.482-2.683-2.719-6.404-4.365-10.482-4.365-8.228 0-14.882 6.654-14.882 14.847V55.803c0-8.192 6.654-14.846 14.882-14.846 4.079 0 7.799 1.645 10.482 4.364C88.892 48.005 90.572 51.69 90.572 55.803zM206.911 55.803v15.813c0-4.115-1.681-7.799-4.364-10.482-2.683-2.719-6.403-4.365-10.482-4.365-8.228 0-14.882 6.654-14.882 14.847V55.803c0-8.192 6.654-14.846 14.882-14.846 4.079 0 7.799 1.645 10.482 4.364C205.23 48.005 206.911 51.69 206.911 55.803zM323.214 55.803v15.813c0-4.115-1.682-7.799-4.365-10.482-2.683-2.719-6.404-4.365-10.482-4.365-8.228 0-14.882 6.654-14.882 14.847V55.803c0-8.192 6.654-14.846 14.882-14.846 4.078 0 7.799 1.645 10.482 4.364C321.532 48.005 323.214 51.69 323.214 55.803z"></path></g><g><path fill="#fa9957" d="M90.572 88.471v15.812c0 8.192-6.654 14.846-14.846 14.846-4.114 0-7.834-1.681-10.517-4.364-2.719-2.683-4.364-6.404-4.364-10.482V88.471c0 4.078 1.645 7.799 4.364 10.482 2.683 2.683 6.404 4.364 10.517 4.364C83.919 103.317 90.572 96.663 90.572 88.471zM206.911 88.471v15.812c0 8.192-6.654 14.846-14.846 14.846-4.114 0-7.834-1.681-10.517-4.364-2.719-2.683-4.364-6.404-4.364-10.482V88.471c0 4.078 1.645 7.799 4.364 10.482 2.683 2.683 6.404 4.364 10.517 4.364C200.258 103.317 206.911 96.663 206.911 88.471zM323.214 88.471v15.812c0 8.192-6.654 14.846-14.847 14.846-4.114 0-7.834-1.681-10.517-4.364-2.719-2.683-4.364-6.404-4.364-10.482V88.471c0 4.078 1.645 7.799 4.364 10.482 2.683 2.683 6.404 4.364 10.517 4.364C316.56 103.317 323.214 96.663 323.214 88.471z"></path></g><path fill="#333" d="M404.106,259.248c-4.275,0-8.464,0.341-12.609,0.83V92.396c0-10.828-8.809-19.637-19.637-19.637h-44.633V55.81c0-5.016-1.965-9.742-5.516-13.293c-3.535-3.582-8.27-5.555-13.328-5.555c-10.41,0-18.883,8.453-18.883,18.848v16.949h-78.59V55.81c0-5.012-1.969-9.742-5.52-13.293c-3.535-3.582-8.27-5.555-13.328-5.555c-10.41,0-18.883,8.453-18.883,18.848v16.949H94.589V55.81c0-5.012-1.965-9.738-5.516-13.293c-3.535-3.582-8.269-5.555-13.332-5.555c-10.41,0-18.883,8.453-18.883,18.848v16.949H19.633C8.809,72.759,0,81.568,0,92.396v292.117c0,10.824,8.809,19.633,19.633,19.633H302.75c15.134,41.321,54.856,70.89,101.355,70.89c59.492,0,107.894-48.402,107.894-107.894S463.598,259.248,404.106,259.248z M297.5,55.81c0-5.98,4.883-10.848,10.883-10.848c2.902,0,5.613,1.125,7.652,3.191c2.059,2.059,3.191,4.777,3.191,7.656v48.472c0,5.98-4.863,10.848-10.844,10.848c-2.898,0-5.629-1.137-7.711-3.215c-2.047-2.016-3.172-4.727-3.172-7.633L297.5,55.81L297.5,55.81z M181.18,55.81c0-5.98,4.883-10.848,10.883-10.848c2.902,0,5.613,1.125,7.652,3.191c2.059,2.062,3.195,4.781,3.195,7.656v48.472c0,5.98-4.867,10.848-10.848,10.848c-2.898,0-5.629-1.137-7.711-3.215c-2.047-2.016-3.172-4.727-3.172-7.633V55.81H181.18z M64.859,55.81c0-5.98,4.883-10.848,10.883-10.848c2.906,0,5.617,1.125,7.652,3.191c2.062,2.062,3.195,4.781,3.195,7.656v48.472c0,5.98-4.867,10.848-10.848,10.848c-2.898,0-5.629-1.133-7.707-3.215c-2.047-2.02-3.176-4.73-3.176-7.633L64.859,55.81L64.859,55.81z M8,123.77V92.396c0-6.418,5.219-11.637,11.633-11.637h37.226v23.523c0,5.062,1.973,9.797,5.535,13.309c3.57,3.57,8.309,5.539,13.348,5.539c10.394,0,18.848-8.453,18.848-18.848V80.759h78.59v23.523c0,5.066,1.973,9.797,5.535,13.309c3.57,3.57,8.312,5.539,13.348,5.539c10.394,0,18.848-8.453,18.848-18.848V80.759h78.59v23.523c0,5.066,1.973,9.797,5.535,13.309c3.57,3.57,8.312,5.539,13.348,5.539c10.391,0,18.844-8.453,18.844-18.848V80.759h44.633c6.418,0,11.637,5.219,11.637,11.637v31.374v16.614H8V123.77z M19.633,396.147C13.219,396.147,8,390.928,8,384.513V148.385h375.496v112.926c-5.173,1.012-10.24,2.325-15.125,4.045v-8.749c0-6.973-5.656-12.644-12.605-12.644h-49.722c-6.973,0-12.645,5.672-12.645,12.644v31.336c0,6.953,5.672,12.609,12.645,12.609h13.264c-14.445,18.355-23.096,41.474-23.096,66.59c0,10.048,1.411,19.768,3.992,29.004L19.633,396.147L19.633,396.147z M360.371,256.607v11.938c-12.9,5.745-24.465,13.944-34.112,24.007h-20.216c-2.563,0-4.645-2.066-4.645-4.609v-31.336c0-2.563,2.082-4.645,4.645-4.645h49.722C358.304,251.963,360.371,254.045,360.371,256.607z M404.106,467.037c-55.082,0-99.894-44.812-99.894-99.894s44.812-99.894,99.894-99.894S504,312.06,504,367.142S459.188,467.037,404.106,467.037z"></path></svg>
                                {item.working_day}
                            </div>
                        </div>
                        
            </div>
           
        )
    })
  return (
    <div className={darkmode? "main dark__main" : "main"}>
            <div className='main__container'>
                <div className='main__filter'>
                <div className = 'main__filter__title'>
                    Yo'nalish bo'yicha tanlash
                </div>
                <div className='main__filter__item'>
                    <ul className = 'filter__item'>
                        <li className = 'filter__link'>
                            <div onClick={(e) => changeValue(e.target)}  className='filter__link__href'>Abituriyentlarni tayyorlash kurslari
                            </div>
                        </li>
                        <li className = 'filter__link'>
                            <div className='filter__link__href' onClick={(e) => changeValue(e.target)}>Kasb Hunar o'rgatish markazlari </div>
                        </li>
                        <li className = 'filter__link'>
                            <div className='filter__link__href' onClick={(e) => changeValue(e.target)}>IT markazlari </div>
                        </li>
                        <li className = 'filter__link'>
                            <div className='filter__link__href' onClick={(e) => changeValue(e.target)}>Bolalar uchun tayyorlov markazlari </div>
                        </li>
                    </ul>
                </div>
                </div>
                <div className='main__info'>
                    <div className='info__cards'>
                        {arr ? arr: <Loader/>}
                    </div>
                </div>
        </div>
    </div>
  );
}
export default Main;