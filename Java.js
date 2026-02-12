async function findData() {
    // var input = document.getElementById("p1").value;
    // alert("You entered: " + input);

     let productid = document.getElementById("p1").value;
     let url = "https://dummyjson.com/products/" + productid;


        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         document.getElementById("result").innerHTML = "Product Title: " + data.title;
        //         document.getElementById("d-2").innerHTML = "<img src='" + data.images[0] + "' alt='" + data.title + "'>";
        //     })
        //     .catch(error => {
        //         console.error("Error fetching product data:", error);
        //     });

        // fetch(url , { method: 'GET' })
        // console.log(url);

        let apiResponse = await fetch(url, { method: 'GET' });
        console.log(apiResponse);
        let data = await apiResponse.json();
        console.log(data);


    //  console.log(url);
     let producttitle = data.title;
     let productImage = data.thumbnail;
     let productDescription = data.description;
    //  let productImage = "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp";
    //  let productDescription = "The Lash Princess False Lash Effect Mascara is a mascara that gives you the false lash effect. It has a unique brush that separates and defines each lash, giving you a dramatic look. The mascara is also long-lasting and smudge-proof, making it perfect for all-day wear.";
    // console.log(productid);

    document.getElementById("d-1").innerHTML = " <h1 style='color: red'> " + producttitle + "</h1>";
    document.getElementById("d-2").innerHTML = "<img src='" + productImage + "' alt='" + producttitle + "'>";
    document.getElementById("d-3").innerHTML = "<p>" + productDescription + "</p>";
    // document.getElementById("result").innerHTML = "You entered: " + productid;
    //     document.getElementById("result").innerHTML = "You entered: "+" <h1> color" +  + productid + "</h1>" + "<img src='" + productImage + "' alt='" + producttitle + "'>"
    //     ;
    //     document.getElementById("d-2").innerHTML = "You entered: "+" <h1> color" +  + productid + "</h1>" + "<img src='" + productImage + "' alt='" + producttitle + "'>";
    // // You can perform further actions with the productid variable, such as making an API call or processing the data as needed.

}