$(document)
  .ready(function() {

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'user_name',
          rules: [
            {
              type   : 'empty',
              prompt : '请输入账户名'
            }
          ]
        },

        password:{
            identifier:'password',
            rules:[
                {
                    type:'empty',
                    prompt:'请输入密码'
                }
            ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.login_popup')
        .popup({
            inline   : true,
            hoverable: true,
            position : 'bottom right',
            delay: {
                show: 300,
                hide: 800
            }
        });


    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in', 1000)
    ;

    setInterval(changeSides, 3000);

  })
;