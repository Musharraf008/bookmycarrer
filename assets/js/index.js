
$("#update_user").submit(function(event){
    event.preventDefault();

    let unindexed_array = $(this).serializeArray();
    // console.log(unindexed_array)
    let data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })

    // console.log(data);
    let request = {
        "url" : `https://bookmycarrer.onrender.com//api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }


    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".delete-btn");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `https://bookmycarrer.onrender.com/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}
