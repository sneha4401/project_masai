function navbar(){
    return  `<header>
    <div class="navbar">
        <div class="nav-1">
            <div class="con-1a">
               <span>Help</span>
               <span>&#8739;</span>
               <span>Order Status</span>
        </div>
            <div class="nav-1b">
                <span style="color:#cececb">Free shipping : </span>
                <span>On All U.S. Orders Over $100</span>
            </div>
            <div class="nav-1c">
                <span><i class="fa-solid fa-phone" style="color: #b8b8b8;"></i></span>
                <span>123.456.7890</span>
            </div>
        </div>

        <div class="nav-2">
            <div class="nav-2a">
                 <img src="../rlogo.jpg" alt="logo">
            </div>
            <div class="nav-2b">
                <div class="con-2b1">
                    <span><input type="text" name="search" placeholder="Search by Make Model Year..." id="search"></span>
                    <span><i class="fa-solid fa-magnifying-glass" style="color: #575757;"></i></span>
                </div>
                <div class="nav-2b2">
                    <a href="">Login</a>
                    <span>Garage<i class="fa-solid fa-angle-down" style="color: #575657"></i></span>
                    <span><i class="fa-solid fa-heart" style="color: #575657;"></i></span>
                    <span><i class="fa-solid fa-cart-shopping" style="color: #575657"></i></span>
                </div>
            </div>
        </div>
        
        <div class="nav-3">
            <ul>
                <li> <a href="">Exterior</a>
                <ul>
                    <li>Paint Color</li>
                    <li>Body Kits</li>
                    <li>Light</li>
                    <li>Mirrors</li>
                    <li>Bumpers</li>
                    <li>Window Tint</li>
                  </ul>
            </li>
            </ul>
          
            <ul>
                <li><a href="">Interior</a>
                    <ul>
                        <li>Seats</li>
                        <li>Floor Mats</li>
                        <li>Steering Wheels</li>
                        <li>Door Sills</li>
                    </ul>
                </ul>
            </li>

            <ul>
                <li><a href="">Performence</a></li>
            </ul>
            <ul>
                <li><a href="">Wheels and Tires</a></li>
            </ul>

            <ul>
                <li><a href="">Body parts</a></li> 
            </ul>

            <ul>
                <li><a href="">Repair Parts</a></li>
            </ul>

            <ul>
                <li><a href="">Electronics</a></li>
            </ul>

            <ul>
                <li><a href="">Tools&Garage</a></li>
            </ul>
        </div>
    </div>

</header>`
}

export {navbar};