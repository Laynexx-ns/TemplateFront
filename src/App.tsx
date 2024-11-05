import {Card, Container, Header, ProfileForm, SideBar} from "@/components/shared";
import {Button} from "@/components/ui/button";
import {Input} from "postcss";

function App() {
    return (
        <div className=" px-4">
            <header className={' opacity-1'}>
                <Header/>
            </header>
            <Container className={'mt-10'}>
                {/*sidebar*/}
                <div className={'relative ml-20 w-[250px]'}>
                    <SideBar/>
                </div>


                    <div className={'mx-auto flex '}>
                        <div className={'justify-center  gap-8'}>
                            <Card name={'qwe'} imageUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOmEhZwJz9BaRWEtKA95b8RGXKtI3QODr-w&s'}/>
                        </div>
                    </div>

            </Container>
        </div>
    )
}

export default App;