import React from 'react';
import cn from 'classnames';

import styles from './UntitledPage.module.scss';

export default function UntitledPage(props) {
  return (
    <div
      style={{ '--src': `url(${require('assets/64a85aa7f79898f6272ac8c67a803ea1.png').default})` }}
      className={`untitled-page ${cn(styles.block, styles.block_layout, styles.header)}`}>
      <div
        // style={{ '--src': `url(${require('assets/a5add2f77e4cae7e2efa5d0fd5d6aa82.png').default})` }}
        className={cn(styles.block1, styles.block1_layout, styles.toto)}>
        
        <video autoPlay loop muted width="100%" height="auto" className={cn(styles.video)} >
          <source src={require('assets/tacos.mp4').default} type="video/mp4"/>
          {/* <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4"/> */}
        </video>

        <div className={cn(styles.block2, styles.block2_layout, styles.navbar)}>
          <div className={cn(styles.block3, styles.block3_layout)}>
            <a href='#galerie'><h2 className={cn(styles.medium_title, styles.medium_title_layout)}>{'Galerie'}</h2></a>
            <div className={cn(styles.block3_spacer)} />
            <a href='#produits'><h2 className={cn(styles.medium_title, styles.medium_title_layout1)}>{'Nos Produits'}</h2></a>
            <div className={cn(styles.block3_spacer)} />
            <a href='#event'><h2 className={cn(styles.medium_title, styles.medium_title_layout2)}>{'Evenement'}</h2></a>
          </div>
        </div>

        <div className={cn(styles.block4, styles.block4_layout)}>
          <div
            style={{ '--src': `url(${require('assets/a0220290df4c4baf9a01b99524e3875b.png').default})` }}
            className={cn(styles.block5, styles.block5_layout)}>
            <div
              style={{ '--src': `url(${require('assets/c1f5d082d90b5ebbbcc419490316a556.png').default})` }}
              className={cn(styles.image3, styles.image3_layout)}
            />
          </div>

          <h1 className={cn(styles.hero_title_box, styles.hero_title_box_layout)}>
            <div className={cn(styles.hero_title)}>
              <span className={cn(styles.hero_title_span0)}>{'N'}</span>
              <span className={cn(styles.hero_title_span1)}>{'otre envie,'}</span>
              <span className={cn(styles.hero_title_span2)}> </span>
              <span className={cn(styles.hero_title_span3)}>{'V'}</span>
              <span className={cn(styles.hero_title_span4)}>{'otre plaisir'}</span>
            </div>
          </h1>
        </div>
      </div>

      <div id='produits' className={cn(styles.group, styles.group_layout)}>
        <div className={cn(styles.block6, styles.block6_layout)}>
          <div className={cn(styles.block7, styles.block7_layout)}>
            <div className={cn(styles.block7_item)}>
              <a href={require('assets/5a15a102fb323cfc300162025e719272.png').default} target="_blank" rel='noreferrer' >
                <div 
                style={{ '--src': `url(${require('assets/5a15a102fb323cfc300162025e719272.png').default})` }} 
                className={cn(styles.image4, styles.image4_layout)}
                />
              </a>
            </div>
            <div className={cn(styles.block7_spacer)} />
            <div className={cn(styles.block7_item)}>
              <a target="_blank" rel='noreferrer' href={require('assets/79286786ec51e03b1069383f4e2d4e5e.png').default}>
                <div
                style={{ '--src': `url(${require('assets/79286786ec51e03b1069383f4e2d4e5e.png').default})` }}
                className={cn(styles.image4, styles.image4_layout1)}
                />
              </a>
            </div>
          </div>

          <div
            id='event'
            style={{ '--src': `url(${require('assets/b44e715b9bb8d61f7ae3152aa85bde11.png').default})` }}
            className={cn(styles.image5, styles.image5_layout)}
          />

          <div className={cn(styles.block8, styles.block8_layout)}>
            <div className={cn(styles.block8_item)}>
              <div
                style={{ '--src': `url(${require('assets/33c5d9bdb18836d453cf315abb13bf94.png').default})` }}
                className={cn(styles.image6, styles.image6_layout)}
              />
            </div>
            <div className={cn(styles.block8_spacer)} />
            <div className={cn(styles.block8_item)}>
              <div
                style={{ '--src': `url(${require('assets/46cd4aeed88334df0c9f32f6856e14f5.png').default})` }}
                className={cn(styles.image6, styles.image6_layout1)}
              />
            </div>
          </div>

          <div
            
            style={{ '--src': `url(${require('assets/b44e715b9bb8d61f7ae3152aa85bde11.png').default})` }}
            className={cn(styles.image5, styles.image5_layout)}
          />

          <div id='galerie'  className={cn(styles.block9, styles.block9_layout)}>
            <div className={cn(styles.block10, styles.block10_layout)}>
              <div className={cn(styles.block10_item)}>
                <div
                  style={{ '--src': `url(${require('assets/d4a0f970876eb9d8c9de380b1115e2c6.png').default})` }}
                  className={cn(styles.image7, styles.image7_layout)}
                />
              </div>
              <div className={cn(styles.block10_spacer)} />
              <div className={cn(styles.block10_item)}>
                <div
                  style={{ '--src': `url(${require('assets/56976f585ac69d0f8475f4c5f1748620.png').default})` }}
                  className={cn(styles.image7, styles.image7_layout)}
                />
              </div>
              <div className={cn(styles.block10_spacer)} />
              <div className={cn(styles.block10_item)}>
                <div
                  style={{ '--src': `url(${require('assets/dfa71c221f0302a37b99f62143a366f7.png').default})` }}
                  className={cn(styles.image7, styles.image7_layout)}
                />
              </div>
            </div>

            <div className={cn(styles.block10, styles.block10_layout1)}>
              <div className={cn(styles.block10_item)}>
                <div
                  style={{ '--src': `url(${require('assets/933728b1aeb8f949c647b5099cee98af.png').default})` }}
                  className={cn(styles.image7, styles.image7_layout)}
                />
              </div>
              <div className={cn(styles.block10_spacer)} />
              <div className={cn(styles.block10_item)}>
                <div
                  style={{ '--src': `url(${require('assets/ca4b37565a42ec5cc612c64254e7bcad.png').default})` }}
                  className={cn(styles.image7, styles.image7_layout)}
                />
              </div>
              <div className={cn(styles.block10_spacer)} />
              <div className={cn(styles.block10_item)}>
                <div
                  style={{ '--src': `url(${require('assets/57fdc6254dc2441896348729ed48457d.png').default})` }}
                  className={cn(styles.image7, styles.image7_layout)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ '--src': `url(${require('assets/cc4ac89b6f7fb43126753e6b78642816.png').default})` }}
        className={cn(styles.block11, styles.block11_layout)}>
        <div className={cn(styles.flex, styles.flex_layout)}>
          <div className={cn(styles.text_body, styles.text_body_layout)}>{'© 2022 tacos inc.'}</div>
          <div className={cn(styles.flex_spacer)} />
          <div className={cn(styles.flex_item)}>
            <div className={cn(styles.block12, styles.block12_layout)}>
              <div className={cn(styles.block12_item)}>
                <div className={cn(styles.block13, styles.block13_layout)}>
                  <h3 className={cn(styles.subtitle, styles.subtitle_layout)}>{'CONTACTEZ-NOUS'}</h3>

                  <div className={cn(styles.block14, styles.block14_layout)}>
                    <div className={cn(styles.block15, styles.block15_layout)}>
                      <h5 className={cn(styles.highlights, styles.highlights_layout)}>{'TÉLÉPHONE :'}</h5>
                      <div className={cn(styles.block15_spacer)} />
                      <h5 className={cn(styles.highlights, styles.highlights_layout)}>{'06 13 65 06 69'}</h5>
                    </div>

                    <div className={cn(styles.block16, styles.block16_layout)}>
                      <h5 className={cn(styles.highlights, styles.highlights_layout)}>{'EMAIL:'}</h5>
                      <div className={cn(styles.block16_spacer)} />
                      <h5 className={cn(styles.highlights, styles.highlights_layout)}>{'michel.dorio@discord.gg'}</h5>
                    </div>

                    <div className={cn(styles.block17, styles.block17_layout)}>
                      <h5 className={cn(styles.highlights1_box, styles.highlights1_box_layout)}>
                        <pre className={cn(styles.highlights1)}>{'SERVEUR GTA RP : https://discord.gg/gprp '}</pre>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cn(styles.block12_spacer)} />
              <div className={cn(styles.block12_item1)}>
                <div className={cn(styles.block18, styles.block18_layout)}>
                  <h3 className={cn(styles.subtitle1, styles.subtitle1_layout)}>{'TROUVEZ-NOUS'}</h3>
                  <div className={cn(styles.block18_item)}>
                    <div
                      style={{ '--src': `url(${require('assets/ba38dd126d3787c97d5effcdd58db94d.png').default})` }}
                      className={cn(styles.group1, styles.group1_layout)}>
                      <h3 className={cn(styles.subtitle11, styles.subtitle11_layout)}>{'ICI'}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(styles.flex_spacer1)} />
          <div className={cn(styles.flex_item1)}>
            <div
              style={{ '--src': `url(${require('assets/fca1221b3fb6631682f25d61855f18bb.png').default})` }}
              className={cn(styles.icon, styles.icon_layout)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

UntitledPage.inStorybook = true;
