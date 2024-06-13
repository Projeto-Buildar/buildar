.btnsNav{   
    align-self: flex-end;
    position: relative;
    display: inline-block; 
}

.btnContainer {
    background-color: #d1cdd4;
    width: 100px;
    padding-inline: 20%;
    padding-top: 20%;
    border-radius: 20px 20px 0 0;
    text-align: center;
    font-size: 1rem;
}

.btnContainer.active {
    background-color: var(--color-primaria);
    color: #FFFFFF;
    padding-bottom: 7%;
    transform: translateY(5px);
}

.after-element {
    
    position: absolute;
    background-color: blueviolet;
    width: calc(100% + 600px); /* 60px a mais que a largura da btnContainer */
    height: 30px;
    top: 100%;
    right: 0;
    transform: translateX(15%);
    z-index: -2;
    border-radius: 0 0 40px 40px;
    cursor: default;
}




