import { MailerService } from '@nestjs-modules/mailer';
import {
  CACHE_MANAGER,
  Controller,
  Get,
  Inject,
  Injectable,
  Query,
} from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
@Controller('mailer')
export class MailController {
  constructor(
    private readonly mailService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  @Get()
  async sendMail(@Query('toemail') toEmail): Promise<string> {
    const code = await this.verificationCode();
    //Mai sửa
    // await this.cacheManager.set('code', code, 25000);

    await this.mailService.sendMail({
      to: toEmail,
      from: 'kwalker.nnk@gmail.com',
      subject: 'Đặt lại mật khẩu',
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
            <!--[if !mso]><!-->
            <meta http-equiv="X-UA-Compatible" content="IE=Edge">
            <!--<![endif]-->
            <!--[if (gte mso 9)|(IE)]>
            <xml>
              <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
              </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
            <!--[if (gte mso 9)|(IE)]>
        <style type="text/css">
          body {width: 600px;margin: 0 auto;}
          table {border-collapse: collapse;}
          table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
          img {-ms-interpolation-mode: bicubic;}
        </style>
      <![endif]-->
            <style type="text/css">
          body, p, div {
            font-family: verdana,geneva,sans-serif;
            font-size: 16px;
          }
          body {
            color: #516775;
          }
          body a {
            color: #993300;
            text-decoration: none;
          }
          p { margin: 0; padding: 0; }
          table.wrapper {
            width:100% !important;
            table-layout: fixed;
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
          }
          img.max-width {
            max-width: 100% !important;
          }
          .column.of-2 {
            width: 50%;
          }
          .column.of-3 {
            width: 33.333%;
          }
          .column.of-4 {
            width: 25%;
          }
          ul ul ul ul  {
            list-style-type: disc !important;
          }
          ol ol {
            list-style-type: lower-roman !important;
          }
          ol ol ol {
            list-style-type: lower-latin !important;
          }
          ol ol ol ol {
            list-style-type: decimal !important;
          }
          @media screen and (max-width:480px) {
            .preheader .rightColumnContent,
            .footer .rightColumnContent {
              text-align: left !important;
            }
            .preheader .rightColumnContent div,
            .preheader .rightColumnContent span,
            .footer .rightColumnContent div,
            .footer .rightColumnContent span {
              text-align: left !important;
            }
            .preheader .rightColumnContent,
            .preheader .leftColumnContent {
              font-size: 80% !important;
              padding: 5px 0;
            }
            table.wrapper-mobile {
              width: 100% !important;
              table-layout: fixed;
            }
            img.max-width {
              height: auto !important;
              max-width: 100% !important;
            }
            a.bulletproof-button {
              display: block !important;
              width: auto !important;
              font-size: 80%;
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .columns {
              width: 100% !important;
            }
            .column {
              display: block !important;
              width: 100% !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
            .social-icon-column {
              display: inline-block !important;
            }
          }
        </style>
            <!--user entered Head Start-->
      
           <!--End Head user entered-->
          </head>
          <body>
            <center class="wrapper" data-link-color="#993300" data-body-style="font-size:16px; font-family:verdana,geneva,sans-serif; color:#516775; background-color:#F9F5F2;">
              <div class="webkit">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#F9F5F2">
                  <tr>
                    <td valign="top" bgcolor="#F9F5F2" width="100%">
                      <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td width="100%">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                              <tr>
                                <td>
                                  <!--[if mso]>
          <center>
          <table><tr><td width="600">
        <![endif]-->
                                          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                            <tr>
                                              <td role="modules-container" style="padding:0px 0px 0px 0px; color:#516775; text-align:left;" bgcolor="#F9F5F2" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
          <tr>
            <td role="module-content">
              <p>Khánh rất vui khi bạn trải nghiệm dịch vụ này!🤍</p>
            </td>
          </tr>
        </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="c9ece7df-475d-4818-ac79-ab6af3717598" data-mc-module-version="2019-10-22">
          <tbody>
            <tr>
              <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: right"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(247, 247, 247); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: arial, helvetica, sans-serif">Email not displaying correctly? </span><a href="{{Weblink}}"><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; outline-color: initial; outline-style: none; outline-width: initial; color: #0055b8; text-decoration-line: none; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; transition-duration: 0.3s; transition-timing-function: ease; transition-delay: 0s; transition-property: color; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(247, 247, 247); font-family: arial, helvetica, sans-serif">View it</span></a><span style="box-sizing: border-box; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; font-style: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-variant-numeric: inherit; font-variant-east-asian: inherit; font-weight: inherit; font-stretch: inherit; line-height: inherit; font-size: 10px; vertical-align: baseline; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; border-top-style: initial; border-right-style: initial; border-bottom-style: initial; border-left-style: initial; border-top-color: initial; border-right-color: initial; border-bottom-color: initial; border-left-color: initial; border-image-source: initial; border-image-slice: initial; border-image-width: initial; border-image-outset: initial; border-image-repeat: initial; color: #000000; letter-spacing: normal; orphans: 2; text-align: right; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(247, 247, 247); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; font-family: arial, helvetica, sans-serif"> in your browser.</span></div><div></div></div></td>
            </tr>
          </tbody>
        </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4UqFsRLozLcypAAv4CeoFS">
            <tbody><tr>
              <td style="font-size:6px; line-height:10px; padding:30px 0px 0px 0px;" valign="top" align="center"><h1>A product of Khanh Nguyen!!!</h1></td>
            </tr>
          </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="iqe7juSSgLbdm3gXWExpsY">
            <tbody><tr>
              <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
              </td>
            </tr>
          </tbody></table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eUYR8ZuwyTirQCAuyEc98X">
            <tbody><tr>
              <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center"><img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" src="https://mc.sendgrid.com/assets/uploads/a4ac93060262cfa49d85ad19bcebfed3467f6fb08dddc48f6a6aad8bd56267ca6655ebffd6642b719f5aec620619804591e2559496a136b59944839f36ed178b.jpg" alt="" width="600" data-responsive="true" data-proportionally-constrained="false"></td>
            </tr>
         
          <tr>
              <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
              </td>
            </tr>
          </tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="jw3c3eYnz3qZ2aqby3rNPX">
            <tbody><tr>
              <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
                  <tbody><tr>
                    <td style="padding:0px 0px 10px 0px;" bgcolor="#ffffff"></td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="noXVUxSTfKbdSVM2Xrua2t">
            <tbody><tr>
              <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
              </td>
            </tr>
          </tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="vh6t2nbGK2ApVEk1CB3r5A" data-mc-module-version="2019-10-22">
            <tbody><tr>
              <td style="padding:18px 0px 18px 0px; line-height:30px; text-align:inherit;" height="100%" valign="top" bgcolor=""><div><div style="font-family: inherit; text-align: center"><span style="color: #993300; font-size: 28px; font-family: georgia, serif"><strong>Your Dong Hanh verification code</strong></span></div><div></div></div></td>
            </tr>
          </tbody></table><table border="0" cellpadding="0" cellspacing="0" class="module" data-role="module-button" data-type="button" role="module" style="table-layout:fixed" width="100%" data-muid="fpvvts1C82XMqQzTjscA1Z"><tbody><tr><td align="center" class="outer-td" style="padding:20px 0px 0px 0px;" bgcolor=""><table border="0" cellpadding="0" cellspacing="0" class="button-css__deep-table___2OZyb wrapper-mobile" style="text-align:center"><tbody><tr><td align="center" bgcolor="#993300" class="inner-td" style="border-radius:6px; font-size:16px; text-align:center; background-color:inherit;"><a style="background-color:#993300; border:1px solid #993300; border-color:#993300; border-radius:0px; border-width:1px; color:#ffffff; display:inline-block; font-family:verdana,geneva,sans-serif; font-size:16px; font-weight:normal; letter-spacing:1px; line-height:30px; padding:12px 20px 12px 20px; text-align:center; text-decoration:none; border-style:solid;" href="" target="_blank">${code}</a></td></tr></tbody></table></td></tr></tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="51LxsNyTDYV3Xp5k5vET2o">
            <tbody><tr>
              <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
              </td>
            </tr>
          </tbody></table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="noLZCGp2Fg6viPoP15ufF1">
            <tbody><tr>
              <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
                <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="10px" style="line-height:10px; font-size:10px;">
                  <tbody><tr>
                    <td style="padding:0px 0px 10px 0px;" bgcolor="#ffffff"></td>
                  </tr>
                </tbody></table>
              </td>
            </tr>
          </tbody></table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="aQTmVGoZvs6GLJLWsiastG">
            <tbody><tr>
              <td style="padding:0px 0px 40px 0px;" role="module-content" bgcolor="">
              </td>
            </tr>
          </tbody></table><table class="module" role="module" data-type="social" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7c8774ac-1807-440e-ad08-f33c228c1d7f">
          <tbody>
            <tr>
              <td valign="top" style="padding:0px 0px 0px 0px; font-size:6px; line-height:10px; background-color:#F9F5F2;" align="center">
                <table align="center" style="-webkit-margin-start:auto;-webkit-margin-end:auto;">
                  <tbody><tr align="center"><td style="padding: 0px 5px;" class="social-icon-column">
            <a role="social-icon-link" href="https://www.facebook.com/KWalkerNNK/" target="_blank" alt="Facebook" title="Facebook" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
              <img role="social-icon" alt="Facebook" title="Facebook" src="https://mc.sendgrid.com/assets/social/white/facebook.png" style="height:30px; width:30px;" height="30" width="30">
            </a>
          </td><td style="padding: 0px 5px;" class="social-icon-column">
            <a role="social-icon-link" href="https://twitter.com/" target="_blank" alt="Twitter" title="Twitter" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
              <img role="social-icon" alt="Twitter" title="Twitter" src="https://mc.sendgrid.com/assets/social/white/twitter.png" style="height:30px; width:30px;" height="30" width="30">
            </a>
          </td><td style="padding: 0px 5px;" class="social-icon-column">
            <a role="social-icon-link" href="https://www.instagram.com/" target="_blank" alt="Instagram" title="Instagram" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
              <img role="social-icon" alt="Instagram" title="Instagram" src="https://mc.sendgrid.com/assets/social/white/instagram.png" style="height:30px; width:30px;" height="30" width="30">
            </a>
          </td><td style="padding: 0px 5px;" class="social-icon-column">
            <a role="social-icon-link" href="https://www.pinterest.com/sendgrid/" target="_blank" alt="Pinterest" title="Pinterest" style="display:inline-block; background-color:#516775; height:30px; width:30px; border-radius:30px; -webkit-border-radius:30px; -moz-border-radius:30px;">
              <img role="social-icon" alt="Pinterest" title="Pinterest" src="https://mc.sendgrid.com/assets/social/white/pinterest.png" style="height:30px; width:30px;" height="30" width="30">
            </a>
          </td></tr></tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="eAq5DwvRYWV4D7T3oBCXhH">
            <tbody><tr>
              <td style="padding:0px 0px 30px 0px;" role="module-content" bgcolor="">
              </td>
            </tr>
          </tbody></table></td>
                                            </tr>
                                          </table>
                                          <!--[if mso]>
                                        </td>
                                      </tr>
                                    </table>
                                  </center>
                                  <![endif]-->
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>
            </center>
          </body>
        </html>`,
    });
    return 'Nice';
  }

  async verificationCode() {
    const code = await Math.floor(Math.random() * 1e6);
    return code;
  }
}
