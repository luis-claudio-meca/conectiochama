document.getElementById("envio").addEventListener("click", () => {



    var radios = document.getElementsByName("inlineRadioOptions");
    let conhecer;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            switch (radios[i].value) {
                case "1":
                    conhecer = "Instagram / Facebook";
                    break;
                case "2":
                    conhecer = "Whatsapp";
                    break;
                case "3":
                    conhecer = "Youtube";
                    break;
                case "4":
                    conhecer = "Passei em frente a igreja";
                    break;
                case "5":
                    conhecer = "Eu fui convidado";
                    break;
            }
        }
    }
    var checkbox = document.getElementsByName("defaultCheck1");
    let mais = '';
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            mais += checkbox[i].value + ',';
        }


    }


    let data = document.getElementById("Date").value;
    let culto = document.getElementById("culto").value;
    let nome = document.getElementById("nome").value;
    let sexo = document.getElementById("sexo").value;
    let idade = document.getElementById("idade").value;
    let civil = document.getElementById("civil").value;
    let phone = document.getElementById("phone").value;
    let bairro = document.getElementById("bairro").value;
    let aceitou = document.getElementById("aceitou").value;
    let visita = document.getElementById("visita").value;
    let voluntario = document.getElementById("voluntario").value;
    let queromais = document.getElementById("queromais").value;
    let algumaigreja = document.getElementById("algumaigreja").value;
    let qualigreja = $("#qualigreja").val();

    if (document.getElementById("convidou").value != '')
        conhecer += ' por ' + document.getElementById("convidou").value





    ////////////// Preparação Json
    let obj = {
        data: data,
        culto: culto,
        nome: nome,
        sexo: sexo,
        idade: idade,
        civil: civil,
        phone: phone,
        bairro: bairro,
        aceitou: aceitou,
        visita: visita,
        queromais: queromais,
        algumaigreja: algumaigreja,
        qualigreja: qualigreja,
        conhecer: conhecer,
        mais: mais,
        voluntario: voluntario
    }

    if (
        data == '' ||
        culto == 'Selecionar...' ||
        nome == '' ||
        sexo == 'Selecionar...' ||
        idade == '' ||
        civil == 'Selecionar...' ||
        phone == '' ||
        bairro == '' ||
        aceitou == 'Selecionar...' ||
        visita == 'Selecionar...' ||
        queromais == 'Selecionar...' ||
        conhecer == '' ||
        mais == '' ||
        conhecer == 'Eu fui convidado' && document.getElementById("convidou").value == '' ||
        algumaigreja == 1 && qualigreja == '' ||
        voluntario == '' ||
        phone == '(00) 00000-0000'

    ) {
        Swal.fire({
            title: 'Opa!',
            text: "Preencha os campos vazios!",
            type: 'error',
            showConfirmButton: false,
            timer: 3000,
        });
    } else {
        $.ajax({
            url: "./db/db.php",
            method: "POST",
            data: obj,
            beforeSend: function () {
                $("#envio").attr('disabled', 'disabled');
            },

            success: function (result) {
                Swal.fire({
                    title: 'Obrigado!',
                    text: "Dados enviados com sucesso",
                    type: 'success',
                    showConfirmButton: false,
                    timer: 3000,
                });
                $("#envio").removeAttr('disabled');
                $("#form").trigger("reset");
            }
        });
    }
})

$("#radiosinputs").click(function () {
    if ($("#inlineRadio7").is(':checked'))
        $("#convidou").css("display", "block");
    else
        $("#convidou").css("display", "none");
})

$("#algumaigreja").on('change', function () {

    if ($("#algumaigreja").val() == 1)
        $("#qualigreja").css("display", "block");
    else
        $("#qualigreja").css("display", "none");

})

