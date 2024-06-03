const Contacts = () => {
    return ( 
        <main class="section">
        <div class="container">
                <h1 class="title-1">Contacts</h1>

                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">Location</h2>
                        <p>Italy, Germany  Europa</p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Telefon / WhatsApp</h2>
                        <p><a href="tel: +4956566486">+49 565 664 860</a></p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Email</h2>
                        <p><a href="info@info.com">info@info.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    );
}
 
export default Contacts;