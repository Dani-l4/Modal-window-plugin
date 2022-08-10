$.modal = function(){
    function _createModal(){
        const modal = document.createElement('div')
        modal.classList.add('main__modal', 'modal')
        modal.insertAdjacentHTML('afterbegin', `
        <div class="modal__overlay" data-close="true">
        <div class='container'>
        <div class="modal__window">
            <form id="form" action="#">
                <div class="modal__header">
                    <h2 class='modal__title'>Стать партнёром проекта</h2>
                    <span data-close="true">&times;</span>
                </div>
                <div class="modal__body">
                    <div class="modal__input-wrap modal__input-wrap_sm">
                        <label class="modal__input-label" for="org"><span>*</span> Название организации</label>
                        <input class="modal__input" id="org" type="text" required>
                    </div>
                    <div class="modal__input-wrap modal__input-wrap_sm">
                        <label class="modal__input-label" for="phone"><span>*</span> Телефон</label>
                        <input class="modal__input" id="phone" type="phone" required>
                    </div>
                    <div class="modal__input-wrap modal__input-wrap_sm">
                        <label class="modal__input-label" for="email"><span>*</span> E-mail</label>
                        <input class="modal__input" id="email" type="email" required>
                    </div>
                    <label class="modal__input-label modal__input-label-photo" for="photo"><span>*</span> Логотип (jpeg, png)</label>
                    <div class="modal__input-wrap modal__input-wrap_photo">
                        <button id="clear"></button>
                        <img class="download-icon" src="img/donwloadIco.svg" alt="download">
                        <label id="photoChoise" for="photo">Выберите файл</label>
                        <input type="file" id="photo" accept="image/png, image/jpeg, image/jpg" style="visibility: hidden;">
                    </div>
                    <div class="modal__input-wrap">
                        <label class="modal__input-label" for="dir"><span>*</span> Направление</label>
                        <select id="dir">
                            <option value="1">Экология</option>
                            <option value="2">Экология</option>
                            <option value="3">Экология</option>
                            <option value="4">Экология</option>
                        </select>
                    </div>
                    <div class="modal__input-wrap modal__input-wrap-pr">
                        <input class="modal__input" type="text">
                        <img class="modal__input-img" src="img/site.svg" alt="site">
                    </div>
                    <div class="modal__input-wrap modal__input-wrap-pr">
                        <input class="modal__input" type="text">
                        <img class="modal__input-img" src="img/VK.svg" alt="vk">
                    </div>
                    <div class="modal__input-wrap modal__input-wrap-pr">
                        <input class="modal__input" type="text">
                        <img class="modal__input-img" src="img/OK.svg" alt="OK">
                    </div>
                    <div class="modal__input-wrap modal__input-wrap-pr">
                        <input class="modal__input" type="text">
                        <img class="modal__input-img" src="img/FB.svg" alt="FB">
                    </div>
                    <div class="modal__input-wrap modal__input-wrap-pr">
                        <input class="modal__input" type="text">
                        <img class="modal__input-img" src="img/inst.svg" alt="inst">
                    </div>
                    <div class="modal__input-wrap modal__input-wrap-pr">
                        <input class="modal__input" type="text">
                        <img class="modal__input-img" src="img/YT.svg" alt="YT">
                    </div>
                    <div class="modal__input-wrap">
                        <label class="modal__input-label" for="supervisor">Руководитель</label>
                        <input class="modal__input" id="supervisor" type="text">
                    </div>
                </div>
                <div class="modal__footer">
                    <div class="modal__buttons">
                        <input class="modal__buttons-submit" type="submit" value="Стать партнёром проекта">
                        <input class="modal__buttons-cancel" type="reset" value="Отменить">
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
        `)
        document.body.appendChild(modal)
        return modal
    }
    const $modal = _createModal() //$var for doc node element
    let closing = false 
    let destroyed = false

    
    const modal = {
        open(){
            if (destroyed){
                return console.log('Modal is destroyed');
            }
            !closing && $modal.classList.add('open')
        },
        close(){
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, 300);
        },
        destroy(){
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        }
    }
    const listener = event => {
        if (event.target.dataset.close){
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)

    return modal
}