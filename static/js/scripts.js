// executes when HTML-Document is loaded and DOM is ready
 $(document).ready(function() {
     var form = $('#buing_product');
     console.log(form);


     $(function () {
         $(".basket").mouseenter(function () {
             $(".basket-container").show()
         })
     })

     $(function () {
         $(".basket").mouseleave(function () {
             $(".basket-container").hide()
         })
     })

     $(function () {
         $(".buy").mouseup(function () {
             let data = {};
             let csrf_token = $('#buing_product [name="csrfmiddlewaretoken"]').val();

             data["csrfmiddlewaretoken"] = csrf_token;

             let url = form.attr("action");
             let data_name = $(this).attr("data_name");
             let data_id = $(this).attr("data_id");
             let data_price = $(this).attr("data_price");
             let elem = $(this).parent().parent().parent().children('.card-body').children('.text-center').children('.price').children('.discountprice');


             data.product_id = data_id;
             data.nmb = 1;
             console.log(data)

             $.ajax({

             url: url,
             type: 'POST',
             data: data,
             cache: true,
             success: function (data) {
                 console.log("OK");
                 console.log(data.products);

                 if(data.products){
                    $('#counter').text(data.products_total_nmb);
                    console.log('clear prepare');
                    $(".basket-container ul").html('');
                    console.log('clear');
                    $.each(data.products, function (x){
                        console.log(data.products[x].nmb)
                         $(".basket-container ul").append('<li>'+ data.products[x].nmb + ' ' + data.products[x].name + ' ' + data.products[x].price_per_item + 'Р' + ' ' +
                          '<span class="delete-item">x</span> '
                            + '</li>')
                    })
                 }
             },
             error: function(){
                console.log("error")

             }

             })



            // $(".basket-container ul").append('<li>' + data_name + ' ' + elem.text() + 'Р' + ' ' +
              //   '<span class="delete-item">x</span> '
               //  + '</li>')
            // let data_count = document.getElementById('vedro').children.length;
           //  document.getElementById('counter').textContent = data_count;

         })
     })

     $(function () {
         $(document).on('click', '.delete-item', function () {
             $(this).closest('li').remove();
            // let data_count = document.getElementById('vedro').children.length;
           //  document.getElementById('counter').textContent = data_count;
         })
     })

 })