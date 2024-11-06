import {Card, Container, Header, ProfileForm, SideBar, SidePanel} from "@/components/shared";


function MainPage() {
    return (
        <div className="flex">
            {/* SidePanel с фиксированным положением и ограниченной шириной */}


            {/* Контейнер с отступом, чтобы контент не перекрывался SidePanel */}
            <div className=" flex-1">
                <header className="opacity-1">

                    <Header/>
                </header>
                <Container className="mt-8">
                    {/* Sidebar и основной контент (на данный момент он почему-то уезжает */}
                    <div className="absolute top-0 mt-40  w-[250px] ml-20">
                        <SideBar/>
                    </div>

                    {/*тут условные карточки с картинками*/}
                    <div className={'ml-[350px] flex flex-1 '}>
                        <div className={'grid grid-cols-4 gap-12'}>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                            <Card name={'qwe'}
                                  imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                        </div>
                    </div>
                </Container>
            </div>
        </div>


    )
}

export default MainPage;