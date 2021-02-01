import React from 'react';
import classes from './Content.module.css';
import html from './img/html-logo.png';
import light from './img/light.png';
import star from './img/star.png';
import pp from './img/person-photo.png';
import css from './img/css3.png';
import css1 from './img/css_1.png';
import css2 from './img/css_2.png';
import css3 from './img/css_3.png';
import node from './img/node.png';
import route from './img/route.png';
import npm from './img/npm.png';
import git from './img/git.png';
import git1 from './img/logo3png.png';
import git2 from './img/git4.png';
import git3 from './img/git1.png';
import git4 from './img/git2.png';


const Content = () => {
   return <div className={classes.content}>
      <div className={classes.content_body}>
         <div className={classes.body_columns}>
            <div className={classes.screen_1 }>
               <div className={classes.html_image}>
                  <img src={html} alt=""></img>
               </div>
               <div className={classes.screen_2_container}>
                  <div lang='ru' className={classes.html_body}>
                     HTML (от английского HyperText Markup Language) — это язык гипертекстовой разметки
                     страницы. Он используется для того, чтобы дать браузеру понять, как нужно отображать
                     загруженный сайт.
                     Язык состоит из тегов — это своеобразные команды, которые преобразовываются в визуальные
                     объекты в
                     браузере пользователя.
               </div>
                  <div className={classes.html_item_selected}>
                     <div className={classes.item_selected_title}>Item selected:</div>
                     <div className={classes.selected}>
                        <div className={classes.selected_text}>Html</div>
                        <div className={classes.selected_price}>+$9.00</div>
                     </div>
                  </div>
                  <div className={classes.html_more_options}>
                     <div>Please select more option if necessary:</div>
                     <div className={classes.options}>
                        <div className={classes.option}>Button</div>
                        <div className={classes.option_price}>+$6.00</div>
                     </div>
                     <div className={classes.options}>
                        <div className={classes.option}>Checkbox</div>
                        <div className={classes.option_price}>+$7.50</div>
                     </div>
                     <div className={classes.options}>
                        <div className={classes.option}>Submit</div>
                        <div className={classes.option_price}>+$6.00</div>
                     </div>


                  </div>
                  <div className={classes.option_add}>Add more information</div>
                  <div className={classes.html_button}>
                     <div className={classes.html_btn}>HTML</div>
                  </div>
               </div>
            </div>

            <div className={classes.screen_2}>
               <div className={classes.screen_2_image}>
                  <img src={light} alt=""></img>
               </div>
               <div className={classes.screen_2_container}>
                  <div className={classes.screen_2_title}>
                     Ibrahim's Barbershop
               </div>
                  <div className={classes.screen_2_cuts}>
                     <div className={classes.cuts_text}>
                        Men's Cuts
                     <div className={classes.cuts_text_appointed}>
                           Appointed to:
                     </div>
                        <div className={classes.cuts_text_time}>
                           time:
                     </div>
                     </div>
                     <div className={classes.cuts_price}>
                        $ 5.0
                  </div>
                  </div>
                  <div className={classes.screen_2_addmore}>
                     Add More Service
               </div>
                  <div className={classes.screen_2_info}>
                     <div className={classes.info_person}>
                        <div className={classes.person_name}>Ibrahim Debbagh</div>
                        <div className={classes.person_stars}>
                           <img src={star} alt=""></img>
                           <img src={star} alt=""></img>
                           <img src={star} alt=""></img>
                           <img src={star} alt=""></img>
                           <img src={star} alt=""></img>
                        ( 5 star )
                     </div>
                     </div>
                     <div className={classes.info_photo}>
                        <img src={pp} alt=""></img>
                     </div>
                  </div>
                  <div className={classes.screen_2_available}>
                     <div className={classes.available_title}>Available Time</div>
                     <div className={classes.available_day}>Today</div>
                  </div>
                  <div className={classes.screen_2_time}>
                     <div className={classes.time_wrapper}>
                        <div className={classes.time_day}>08:30 am</div>
                        <div className={`${classes.time_day} ${classes.act}`}>02:30 pm</div>
                     </div>
                     <div className={classes.time_wrapper}>
                        <div className={classes.time_day}>12:20 am</div>
                        <div className={classes.time_day}>03:30 pm</div>
                     </div>
                     <div className={classes.time_wrapper}>
                        <div className={`${classes.time_day} ${classes.act}`}>12:20 am</div>
                        <div className={classes.time_day}>04:20 apm</div>
                     </div>
                     <div className={classes.time_wrapper}>
                        <div className={`${classes.time_day} ${classes.act}`}>01:00 pm</div>
                        <div className={`${classes.time_day} ${classes.act_1}`}>05:00 pm</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className={classes.body_columns}>
            <div className={classes.screen_3}>
               <div className={classes.screen_3_top}>
                  <div className={classes.top_column}>
                     <div>Subtotal</div>
                     <div>Tax</div>
                     <div className={classes.top_column_weight}>Total</div>
                  </div>
                  <div className={classes.top_column}>
                     <div>$ 5.00</div>
                     <div>$ 0.15</div>
                     <div className={classes.top_column_weight}>$ 5.15</div>
                  </div>
               </div>
               <div className={classes.screen_3_bottom}>
                  <div className={classes.bottom_checkout}>
                     <div className={classes.checkout_item}>1</div>
                     <div className={classes.checkout_item}>Checkout</div>
                     <div className={classes.checkout_item}>$ 5.15</div>
                  </div>
               </div>
            </div>
            <div className={classes.screen_4}>
               <div className={classes.screen_2_image}>
                  <img src="img/content/light.png" alt=""></img>
               </div>
               <div className={classes.screen_4_image}>
                  <img src={css} alt=""></img>
               </div>
               <div className={classes.screen_2_container}>
                  <div lang='ru' className={classes.css_text}>
                     CSS – это формальный язык, служащий для описания оформления внешнего вида документа,
                     созданного с использованием языка разметки (HTML, XHTML, XML). Название происходит от
                     английского
                     Cascading Style Sheets, что означает «каскадные таблицы стилей». Назначение CSS – отделять
                     то, что задает
                     внешний вид страницы, от ее содержания. Если документ создан только с использованием HTML,
                     то
                     в нем
                     определяется не только каждый элемент, но и способ его отображения (цвет, шрифт, положение
                     блока и т.
                     д.). Если же подключены каскадные таблицы стилей, то HTML описывает только очередность
                     объектов. А за все
                     их свойства отвечает CSS.
               </div>
                  <div className={classes.screen_2_addmore}>
                     Learn More
               </div>
                  <div className={classes.suggested}>
                     <div className={classes.suggested_title}>
                        Suggested Item
                  </div>
                     <div className={classes.suggested_body}>
                        <div className={classes.suggested_left}>
                           <div className={classes.suggested_left_t}>
                              Hair Cut
                        </div>
                           <div className={classes.suggested_left_b}>
                              $ 15.00
                        </div>
                        </div>
                        <div className={classes.suggested_medium}>
                           <img src={css1} alt=""></img>
                        </div>
                        <div className={classes.suggested_right}>
                           <div className={classes.right_circle}></div>
                        </div>
                     </div>
                     <div className={classes.suggested_body}>
                        <div className={classes.suggested_left}>
                           <div className={classes.suggested_left_t}>
                              Hair Wash
                        </div>
                           <div className={classes.suggested_left_b}>
                              $ 12.70
                        </div>
                        </div>
                        <div className={classes.suggested_medium}>
                           <img src={css2} alt=""></img>
                        </div>
                        <div className={classes.suggested_right}>
                           <div className={classes.right_circle}></div>
                        </div>
                     </div>
                     <div className={classes.suggested_body}>
                        <div className={classes.suggested_left}>
                           <div className={classes.suggested_left_t}>
                              Buzz Cut
                        </div>
                           <div className={classes.suggested_left_b}>
                              $ 18.00
                        </div>
                        </div>
                        <div className={classes.suggested_medium}>
                           <img src={css3} alt=""></img>
                        </div>
                        <div className={classes.suggested_right}>
                           <div className={classes.right_circle}></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className={classes.screen_5}>
               <div className={classes.screen_2_image}>
                  <img src={light} alt=""></img>
               </div>
               <div className={classes.screen_2_container}>
                  <div className={classes.screen_5_order}>
                     Orders
               </div>
                  <div className={classes.order_text}>
                     <div className={classes.order_l}>
                        Past
                  </div>
                     <div className={classes.order_m}>
                        Upcoming
                  </div>
                     <div className={classes.order_r}>
                        Favoutites
                  </div>
                  </div>
                  <div className={classes.order_footer}>
                     <div className={classes.order_footer_column}>
                        <div className={classes.order_french}>French Crop...</div>
                        <div className={classes.order_data}>Sunday, Apr 14th</div>
                        <div className={classes.order_kids}>Kids</div>
                     </div>
                     <div className={classes.order_footer_column}>$ 28.39</div>
                  </div>
               </div>
            </div>
         </div>
         <div className={classes.body_columns}>
            <div className={classes.screen_6}>
               <div className={classes.screen_6_node}>
                  <img src={node} alt=""></img>
               </div>
               <div className={classes.screen_6_route}>
                  <img src={route} alt=""></img>
               </div>
               <div className={classes.node_footer}>
                  <div className={classes.screen_2_container}>
                     <div className={classes.node_title}>NodeJS</div>
                     <div className={classes.node_items}>
                        <div className={classes.items_item}>
                           <div className={classes.item_line}></div>
                        </div>
                        <div className={classes.items_item}>
                           <div className={`${classes.item_line} ${classes.line_g}`}></div>
                        </div>
                        <div className={classes.items_item}>
                           <div className={`${classes.item_line} ${classes.line_g}`}></div>
                        </div>
                        <div className={classes.items_item}>
                           <div className={`${classes.item_line} ${classes.line_g}`}></div>
                        </div>
                     </div>
                     <div lang='ru' className={classes.node_text}>
                        Node.js (или просто Node) — это серверная платформа для работы с JavaScript через
                        движок V8. JavaScript выполняет действие на стороне клиента, а Node — на сервере. С
                        помощью Node можно
                        писать полноценные приложения. Node умеет работать с внешними библиотеками, вызывать
                        команды из кода на
                        JavaScript и выполнять роль веб-сервера. Чтобы установить, необходимо перейти на
                        официальный сайт
                        https://nodejs.org и на главной странице скачать последнюю стабильную версию.
                  </div>
                  </div>
               </div>
            </div>
            <div className={classes.screen_7}>
               <div className={classes.screen_7_npm}>
                  <img src={npm} alt=""></img>
               </div>
               <div className={classes.screen_2_container}>
                  <div lang='ru' className={classes.npm_text}>
                     NPM – это менеджер пакетов, который входит в состав Node.js. В течение многих лет
                     широко использовался разработчиками JavaScript для обмена инструментами, установки различных
                     модулей и
                     управления их зависимостями. Вот почему людям, работающим с Node.js, очень важно понять, что
                     такое npm.
               </div>
               </div>
            </div>
         </div>
         <div className={classes.body_columns}>
            <div className={classes.screen_8 }>
               <div className={classes.screen_2_container}>
                  <div className={classes.screen_8_options}>
                     <div className={classes.options}>
                        <div className={classes.option}>Wash</div>
                        <div className={classes.option_price}>+$6.00</div>
                     </div>
                     <div className={`${classes.options} ${classes.options_active}`}>
                        <div className={`${classes.option} ${classes.option_active}`}>Buz Cut</div>
                        <div className={classes.option_price}>+$9.00</div>
                     </div>
                     <div className={classes.options}>
                        <div className={classes.option}>X Cut</div>
                        <div className={classes.option_price}>+$7.50</div>
                     </div>
                     <div className={classes.options}>
                        <div className={classes.option}>Y Cut</div>
                        <div className={classes.option_price}>+$6.00</div>
                     </div>
                  </div>
                  <div className={classes.option_add}>Add more information</div>
                  <div className={classes.html_button}>
                     <div className={`${classes.html_btn} ${classes.html_btn_active}`}>Book</div>
                  </div>
               </div>
            </div>
            <div className={classes.screen_9}>
               <div className={classes.screen_2_image}>
                  <img src={light} alt=""></img>
               </div>
               <div className={classes.screen_9_image}>
                  <img src={git} alt=""></img>
               </div>
               <div className={classes.git_circles}>
                  <div className={classes.git_circle}></div>
                  <div className={classes.git_circle}></div>
                  <div className={`${classes.git_circle} ${classes.git_circle_active}`}></div>
                  <div className={classes.git_circle}></div>
               </div>
               <div className={classes.screen_2_container}>
                  <div lang='ru' className={classes.git_title}>
                     Система контроля версий — это система, записывающая изменения в файл или набор файлов
                     в течение времени и позволяющая вернуться позже к определённой версии. Для контроля версий
                     файлов в этой
                     книге в качестве примера будет использоваться исходный код программного обеспечения, хотя на
                     самом деле
                     вы можете использовать контроль версий практически для любых типов файлов.
               </div>
                  <div className={classes.git_images}>
                     <div className={classes.git_image}>
                        <div className={classes.git_image_item}>
                           <img src={git1} alt=""></img>
                        </div>
                        <div className={classes.git_image_item}>
                           <img src={git2} alt=""></img>
                        </div>
                     </div>
                  </div>
                  <div className={classes.git_body_wrapper}>
                     <div className={classes.git_body}>
                        <div className={classes.git_body_image}>
                           <img src={git3} alt=""></img>
                        </div>
                        <div className={classes.git_body_text}>
                           <ul>
                              <li>checkout</li>
                              <li>add</li>
                              <li>commit</li>
                              <li>pull</li>
                              <li>push</li>
                           </ul>
                        </div>
                     </div>
                     <div className={classes.git_body}>
                        <div className={classes.git_body_image}>
                           <img src={git4} alt=""></img>
                        </div>
                        <div lang='ru' className={classes.git_body_text}>
                           Основы ветвления и слияния
                     </div>
                     </div>

                  </div>
                  <div className={classes.screen_2_addmore}>
                     Learn More
               </div>
               </div>
            </div>
         </div>
      </div>
   </div>
}

export default Content;