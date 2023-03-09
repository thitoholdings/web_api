export default function emailNote(note, issue) {
  if (issue) {
    if (issue == "comment") {
      //######################## COMMENTS #########################
      return `      
      <!DOCTYPE html>
      <html>
      <head>
        <title></title>
      </head>
      <body>
      
        <!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            padding: 0;
          }
      
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
      
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
      
          p {
            line-height: inherit
          }
      
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
      
          @media (max-width:670px) {
      
            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
              display: inline-block !important;
            }
      
            .icons-inner {
              text-align: center;
            }
      
            .icons-inner td {
              margin: 0 auto;
            }
      
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
      
            .mobile_hide {
              display: none;
            }
      
            .stack .column {
              width: 100%;
              display: block;
            }
      
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
          .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
          }
        </style>
      </head>
      
      <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
          <tbody>
            <tr>
              <td>
                <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4a329c; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/51c25990-208d-4f89-b94f-7a04081f469b.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://res.cloudinary.com/thito-holdings/image/upload/v1673252834/thitologo_lqizby-modified_wdapid.png" style="display: block; height: auto; border: 0; width: 100px; max-width: 100%;" width="100" alt="Logo Placeholder" title="Logo Placeholder"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="divider_block block-3" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Georgia, 'Times New Roman', serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif;">
                                          <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px;"><span style="font-size:38px;color:#ffffff;"><strong>${note.body}</strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;"><span style="font-size:14px;">ISSUE ID: ${note.issue.id}</span></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;"><span style="font-size:14px;">&nbsp;</span></span></p> <!-- ISSUE DATE--->
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px;width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://res.cloudinary.com/thito-holdings/image/upload/v1673013445/Conversion_rate_optimization-amico_gdqh0j.png" style="display: block; height: auto; border: 0; width: 390px; max-width: 100%;" width="390" alt="New Year Party 2022" title="New Year Party 2022"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><strong><span style="color:#ffffff;font-size:20px;">${note.issue.title}</span></strong></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;font-size:15px;">${note.comment}</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-10" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://helpdesk.thitoholdings.co.bw/tickets/${note.issue.id}" style="height:42px;width:255px;v-text-anchor:middle;" arcsize="74%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#fe4496; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://helpdesk.thitoholdings.co.bw/tickets/${note.issue.id}" target="_blank" style="text-decoration:none;display:inline-block;color:#fe4496;background-color:#ffffff;border-radius:31px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">Click here to see this ISSUE ➜</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                      
                                    </td>
                                  </tr>
                                </table>
                                <table class="divider_block block-11" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ebe8e8; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/div4newyear.png'); background-position: center top; background-repeat: repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:32px;line-height:32px;font-size:1px;">&#8202;</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:30px;padding-bottom:30px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/icon_newyear-02.png" style="display: block; height: auto; border: 0; width: 211px; max-width: 100%;" width="211" alt="Transport Placeholder" title="Transport Placeholder"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                <table class="divider_block mobile_hide block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Georgia, 'Times New Roman', serif">
                                        <div class style="font-size: 14px; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:20px;color:#26c6da;"><strong>➜ HELLO</strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 21px; color: #555555; line-height: 1.5;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">This notification is from our online HELPDESK platform which allows you to make requests to multiple departments , track the requests , make and see updates regarding those requests.</span></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe; background-position: center top;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:20px;padding-bottom:20px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/icon_newyear-01.png" style="display: block; height: auto; border: 0; width: 211px; max-width: 100%;" width="211" alt="Transport Placeholder" title="Transport Placeholder"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                <table class="divider_block mobile_hide block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Georgia, 'Times New Roman', serif">
                                        <div class style="font-size: 14px; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:20px;color:#fe4496;"><strong>➜ FAQ</strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 21px; color: #555555; line-height: 1.5;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;"><strong>How to Create An Account?</strong></span></span></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">Inform your supervisor , he/she will send an email to the web department in order to create an account.</span></span></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">How to Recover my Password?</span></span></strong></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">On the login page , press the '<em>Forgot Password</em>' link and follow the prompts.</span></span></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">How to use the Helpdesk?</span></span></strong></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">Your supervisor will provide you with a manual that has instructions on how to user the Thito Holdings Helpdesk.</span></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4a329c; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/aec58547-c1ac-45a4-baf5-12486ff80370.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px;width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://res.cloudinary.com/thito-holdings/image/upload/v1673013522/Conversion_rate_optimization-amico_1_wyhnzb.png" style="display: block; height: auto; border: 0; width: 130px; max-width: 100%;" width="130" alt="New Year 2022" title="New Year 2022"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;font-size:20px;">Click the button below to visit the <strong><span style="color:#ff00cc;">Helpdesk&nbsp;</span></strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://helpdesk.thitoholdings.co.bw" style="height:42px;width:132px;v-text-anchor:middle;" arcsize="74%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#fe4496; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://helpdesk.thitoholdings.co.bw" target="_blank" style="text-decoration:none;display:inline-block;color:#fe4496;background-color:#ffffff;border-radius:31px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">HELPDESK ➜</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="social_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table class="social-table" width="74px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                          <tr>
                                            <td style="padding:0 5px 0 0px;"><a href="https://www.facebook.com/profile.php?id=100069494421295" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="32" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 5px 0 0px;"><a href="https://www.linkedin.com/company/boprita-thito-holdings/mycompany/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              
              </td>
            </tr>
          </tbody>
        </table><!-- End -->
      </body>
      
      </html>
      
      </body>
      </html>
      `;
    }

    if (issue == "mention") {
      //##################### MENTION USERS ########################
      return ` <!DOCTYPE html>
      <html>
      <head>
        <title></title>
      </head>
      <body>
      
        <!DOCTYPE html>
      <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
      
      <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
        <!--<![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
      
          body {
            margin: 0;
            padding: 0;
          }
      
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
      
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
      
          p {
            line-height: inherit
          }
      
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
      
          @media (max-width:670px) {
      
            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
              display: inline-block !important;
            }
      
            .icons-inner {
              text-align: center;
            }
      
            .icons-inner td {
              margin: 0 auto;
            }
      
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
      
            .mobile_hide {
              display: none;
            }
      
            .stack .column {
              width: 100%;
              display: block;
            }
      
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
      
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
          .button {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
          }
        </style>
      </head>
      
      <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
          <tbody>
            <tr>
              <td>
                <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4a329c; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/51c25990-208d-4f89-b94f-7a04081f469b.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://res.cloudinary.com/thito-holdings/image/upload/v1673252834/thitologo_lqizby-modified_wdapid.png" style="display: block; height: auto; border: 0; width: 100px; max-width: 100%;" width="100" alt="Logo Placeholder" title="Logo Placeholder"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="divider_block block-3" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Georgia, 'Times New Roman', serif">
                                        <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif;">
                                          <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px;"><span style="font-size:38px;color:#ffffff;"><strong>${note.body}</strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;"><span style="font-size:14px;">ISSUE ID: ${note.issue.id}</span></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;"><span style="font-size:14px;">&nbsp;</span></span></p> <!-- ISSUE DATE--->
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px;width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://res.cloudinary.com/thito-holdings/image/upload/v1673013445/Conversion_rate_optimization-amico_gdqh0j.png" style="display: block; height: auto; border: 0; width: 390px; max-width: 100%;" width="390" alt="New Year Party 2022" title="New Year Party 2022"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><strong><span style="color:#ffffff;font-size:20px;">${note.issue.title}</span></strong></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;font-size:15px;">${note.comment}</span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-10" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://helpdesk.thitoholdings.co.bw/tickets/${note.issue.id}" style="height:42px;width:255px;v-text-anchor:middle;" arcsize="74%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#fe4496; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://helpdesk.thitoholdings.co.bw/tickets/${note.issue.id}" target="_blank" style="text-decoration:none;display:inline-block;color:#fe4496;background-color:#ffffff;border-radius:31px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">Click here to see this ISSUE ➜</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="divider_block block-11" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ebe8e8; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/div4newyear.png'); background-position: center top; background-repeat: repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:32px;line-height:32px;font-size:1px;">&#8202;</div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:30px;padding-bottom:30px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/icon_newyear-02.png" style="display: block; height: auto; border: 0; width: 211px; max-width: 100%;" width="211" alt="Transport Placeholder" title="Transport Placeholder"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                <table class="divider_block mobile_hide block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Georgia, 'Times New Roman', serif">
                                        <div class style="font-size: 14px; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:20px;color:#26c6da;"><strong>➜ HELLO</strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 21px; color: #555555; line-height: 1.5;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">This notification is from our online HELPDESK platform which allows you to make requests to multiple departments , track the requests , make and see updates regarding those requests.</span></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe; background-position: center top;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:20px;padding-bottom:20px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/icon_newyear-01.png" style="display: block; height: auto; border: 0; width: 211px; max-width: 100%;" width="211" alt="Transport Placeholder" title="Transport Placeholder"></div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                <table class="divider_block mobile_hide block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: Georgia, 'Times New Roman', serif">
                                        <div class style="font-size: 14px; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:20px;color:#fe4496;"><strong>➜ FAQ</strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 21px; color: #555555; line-height: 1.5;">
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;"><strong>How to Create An Account?</strong></span></span></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">Inform your supervisor , he/she will send an email to the web department in order to create an account.</span></span></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">How to Recover my Password?</span></span></strong></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">On the login page , press the '<em>Forgot Password</em>' link and follow the prompts.</span></span></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">How to use the Helpdesk?</span></span></strong></p>
                                          <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">Your supervisor will provide you with a manual that has instructions on how to user the Thito Holdings Helpdesk.</span></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4a329c; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/aec58547-c1ac-45a4-baf5-12486ff80370.png'); background-position: center top; background-repeat: no-repeat;">
                  <tbody>
                    <tr>
                      <td>
                        <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                          <tbody>
                            <tr>
                              <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                <table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                          <tr>
                                            <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad" style="padding-bottom:15px;width:100%;padding-right:0px;padding-left:0px;">
                                      <div class="alignment" align="center" style="line-height:10px"><img src="https://res.cloudinary.com/thito-holdings/image/upload/v1673013522/Conversion_rate_optimization-amico_1_wyhnzb.png" style="display: block; height: auto; border: 0; width: 130px; max-width: 100%;" width="130" alt="New Year 2022" title="New Year 2022"></div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                  <tr>
                                    <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                      <div style="font-family: Arial, sans-serif">
                                        <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                          <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;font-size:20px;">Click the button below to visit the <strong><span style="color:#ff00cc;">Helpdesk&nbsp;</span></strong></span></p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://helpdesk.thitoholdings.co.bw" style="height:42px;width:132px;v-text-anchor:middle;" arcsize="74%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#fe4496; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://helpdesk.thitoholdings.co.bw" target="_blank" style="text-decoration:none;display:inline-block;color:#fe4496;background-color:#ffffff;border-radius:31px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">HELPDESK ➜</span></span></a>
                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table class="social_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                  <tr>
                                    <td class="pad">
                                      <div class="alignment" align="center">
                                        <table class="social-table" width="74px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                          <tr>
                                            <td style="padding:0 5px 0 0px;"><a href="https://www.facebook.com/profile.php?id=100069494421295" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="32" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                            <td style="padding:0 5px 0 0px;"><a href="https://www.linkedin.com/company/boprita-thito-holdings/mycompany/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              
              </td>
            </tr>
          </tbody>
        </table><!-- End -->
      </body>
      
      </html>
      
      </body>
      </html>`;
    }

    //################ ISSUES ######################
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title></title>
    </head>
    <body>
    
      <!DOCTYPE html>
    <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
    
    <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
      <!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css">
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css">
      <!--<![endif]-->
      <style>
        * {
          box-sizing: border-box;
        }
    
        body {
          margin: 0;
          padding: 0;
        }
    
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: inherit !important;
        }
    
        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
        }
    
        p {
          line-height: inherit
        }
    
        .desktop_hide,
        .desktop_hide table {
          mso-hide: all;
          display: none;
          max-height: 0px;
          overflow: hidden;
        }
    
        @media (max-width:670px) {
    
          .desktop_hide table.icons-inner,
          .social_block.desktop_hide .social-table {
            display: inline-block !important;
          }
    
          .icons-inner {
            text-align: center;
          }
    
          .icons-inner td {
            margin: 0 auto;
          }
    
          .image_block img.big,
          .row-content {
            width: 100% !important;
          }
    
          .mobile_hide {
            display: none;
          }
    
          .stack .column {
            width: 100%;
            display: block;
          }
    
          .mobile_hide {
            min-height: 0;
            max-height: 0;
            max-width: 0;
            overflow: hidden;
            font-size: 0px;
          }
    
          .desktop_hide,
          .desktop_hide table {
            display: table !important;
            max-height: none !important;
          }
        }
        .button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      </style>
    </head>
    
    <body style="background-color: #FFFFFF; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF;">
        <tbody>
          <tr>
            <td>
              <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4a329c; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/51c25990-208d-4f89-b94f-7a04081f469b.png'); background-position: center top; background-repeat: no-repeat;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img src="https://res.cloudinary.com/thito-holdings/image/upload/v1673252834/thitologo_lqizby-modified_wdapid.png" style="display: block; height: auto; border: 0; width: 100px; max-width: 100%;" width="100" alt="Logo Placeholder" title="Logo Placeholder"></div>
                                  </td>
                                </tr>
                              </table>
                              <table class="divider_block block-3" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Georgia, 'Times New Roman', serif">
                                      <div class style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif;">
                                        <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 14.399999999999999px;"><span style="font-size:38px;color:#ffffff;"><strong>${note}</strong></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Arial, sans-serif">
                                      <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;"><span style="font-size:14px;">ISSUE ID: ${issue.id}</span></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-6" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Arial, sans-serif">
                                      <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;"><span style="font-size:14px;">ISSUE DATE: ${issue.createdAt}&nbsp;</span></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="image_block block-7" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-bottom:15px;width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img class="big" src="https://res.cloudinary.com/thito-holdings/image/upload/v1673013445/Conversion_rate_optimization-amico_gdqh0j.png" style="display: block; height: auto; border: 0; width: 390px; max-width: 100%;" width="390" alt="New Year Party 2022" title="New Year Party 2022"></div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-8" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: Arial, sans-serif">
                                      <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><strong><span style="color:#ffffff;font-size:20px;">${issue.title}</span></strong></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-9" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: Arial, sans-serif">
                                      <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;color:#fff;"><span style="color:#ffffff;font-size:15px;">${issue.description}</span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="button_block block-10" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://helpdesk.thitoholdings.co.bw/tickets/${issue.id}" style="height:42px;width:255px;v-text-anchor:middle;" arcsize="74%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#fe4496; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://helpdesk.thitoholdings.co.bw/tickets/${issue.id}" target="_blank" style="text-decoration:none;display:inline-block;color:#fe4496;background-color:#ffffff;border-radius:31px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">Click here to see this ISSUE ➜</span></span></a>
                                      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="divider_block block-11" width="100%" border="0" cellpadding="20" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ebe8e8; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/div4newyear.png'); background-position: center top; background-repeat: repeat;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block" style="height:32px;line-height:32px;font-size:1px;">&#8202;</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:30px;padding-bottom:30px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/icon_newyear-02.png" style="display: block; height: auto; border: 0; width: 211px; max-width: 100%;" width="211" alt="Transport Placeholder" title="Transport Placeholder"></div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                              <table class="divider_block mobile_hide block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Georgia, 'Times New Roman', serif">
                                      <div class style="font-size: 14px; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:20px;color:#26c6da;"><strong>➜ HELLO</strong></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                    <div style="font-family: Arial, sans-serif">
                                      <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 21px; color: #555555; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">This notification is from our online HELPDESK platform which allows you to make requests to multiple departments , track the requests , make and see updates regarding those requests.</span></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe; background-position: center top;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="width:100%;padding-right:0px;padding-left:0px;padding-top:20px;padding-bottom:20px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/icon_newyear-01.png" style="display: block; height: auto; border: 0; width: 211px; max-width: 100%;" width="211" alt="Transport Placeholder" title="Transport Placeholder"></div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-left: 20px; padding-right: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <div class="spacer_block" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                              <table class="divider_block mobile_hide block-2" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad">
                                    <div style="font-family: Georgia, 'Times New Roman', serif">
                                      <div class style="font-size: 14px; font-family: 'Droid Serif', Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"><span style="font-size:20px;color:#fe4496;"><strong>➜ FAQ</strong></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-bottom:30px;padding-left:10px;padding-right:10px;padding-top:5px;">
                                    <div style="font-family: Arial, sans-serif">
                                      <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 21px; color: #555555; line-height: 1.5;">
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;"><strong>How to Create An Account?</strong></span></span></p>
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">Inform your supervisor , he/she will send an email to the web department in order to create an account.</span></span></p>
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">How to Recover my Password?</span></span></strong></p>
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">On the login page , press the '<em>Forgot Password</em>' link and follow the prompts.</span></span></p>
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 21px;"><strong><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">How to use the Helpdesk?</span></span></strong></p>
                                        <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 24px;"><span style="color:#ffffff;font-size:16px;"><span style="color:#2c2053;">Your supervisor will provide you with a manual that has instructions on how to user the Thito Holdings Helpdesk.</span></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fef9fe;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="5" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #4a329c; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/5766/aec58547-c1ac-45a4-baf5-12486ff80370.png'); background-position: center top; background-repeat: no-repeat;">
                <tbody>
                  <tr>
                    <td>
                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 650px;" width="650">
                        <tbody>
                          <tr>
                            <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                              <table class="divider_block block-1" width="100%" border="0" cellpadding="15" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                        <tr>
                                          <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 0px solid #BBBBBB;"><span>&#8202;</span></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad" style="padding-bottom:15px;width:100%;padding-right:0px;padding-left:0px;">
                                    <div class="alignment" align="center" style="line-height:10px"><img src="https://res.cloudinary.com/thito-holdings/image/upload/v1673013522/Conversion_rate_optimization-amico_1_wyhnzb.png" style="display: block; height: auto; border: 0; width: 130px; max-width: 100%;" width="130" alt="New Year 2022" title="New Year 2022"></div>
                                  </td>
                                </tr>
                              </table>
                              <table class="text_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                <tr>
                                  <td class="pad" style="padding-left:10px;padding-right:10px;padding-top:10px;">
                                    <div style="font-family: Arial, sans-serif">
                                      <div class style="font-size: 14px; font-family: 'Nunito', Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2;">
                                        <p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 16.8px;"><span style="color:#ffffff;font-size:20px;">Click the button below to visit the <strong><span style="color:#ff00cc;">Helpdesk&nbsp;</span></strong></span></p>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="button_block block-4" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://helpdesk.thitoholdings.co.bw" style="height:42px;width:132px;v-text-anchor:middle;" arcsize="74%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#fe4496; font-family:'Trebuchet MS', Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://helpdesk.thitoholdings.co.bw" target="_blank" style="text-decoration:none;display:inline-block;color:#fe4496;background-color:#ffffff;border-radius:31px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:20px;padding-right:20px;font-size:16px;display:inline-block;letter-spacing:normal;"><span dir="ltr" style="word-break: break-word; line-height: 32px;">HELPDESK ➜</span></span></a>
                                      <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </table>
                              <table class="social_block block-5" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tr>
                                  <td class="pad">
                                    <div class="alignment" align="center">
                                      <table class="social-table" width="74px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                        <tr>
                                          <td style="padding:0 5px 0 0px;"><a href="https://www.facebook.com/profile.php?id=100069494421295" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/facebook@2x.png" width="32" height="32" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                          <td style="padding:0 5px 0 0px;"><a href="https://www.linkedin.com/company/boprita-thito-holdings/mycompany/" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-white/linkedin@2x.png" width="32" height="32" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
                                        </tr>
                                      </table>
                                    </div>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            
            </td>
          </tr>
        </tbody>
      </table><!-- End -->
    </body>
    
    </html>
    
    </body>
    </html>      

     `;
  }

  //########################## ANY OTHER NOTE ######################
  return `      
   <div class="clean-body u_body" style="line-height: inherit; margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #ffffff; color: #000000;">
   <!--[if IE]><div class="ie-container"><![endif]-->
   <!--[if mso]><div class="mso-container"><![endif]-->
   <table style="line-height: inherit; color: #000000; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; min-width: 320px; Margin: 0 auto; background-color: #ffffff; width: 100%;" cellpadding="0" cellspacing="0" width="100%" valign="top" bgcolor="#ffffff">
   <tbody style="line-height: inherit;">
   <tr style="line-height: inherit; border-collapse: collapse; vertical-align: top;" valign="top">
     <td style="line-height: inherit; color: #000000; word-break: break-word; vertical-align: top; border-collapse: collapse;" valign="top">
     <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
     
   <div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: transparent;">
   <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #017ed0;">
     <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #017ed0;"><![endif]-->
       
   <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
   <div style="line-height: inherit; width: 100%;">
   <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent;"><!--<![endif]-->
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 40px 10px 19px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <table width="100%" cellpadding="0" cellspacing="0" border="0" style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse;" valign="top">
   <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
     <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; padding-right: 0px; padding-left: 0px;" align="center" valign="top">
       
       <img align="cen
   ter" border="0" src="https://res.cloudinary.com/thito-holdings/image/upload/v1645168991/th_logo_g6ao1b.png" alt="Image" title="Image" style="line-height: inherit; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; border: none; height: auto; float: none; width: 26%; max-width: 150.8px; display: inline-block;" width="150.8">
       
     </td>
   </tr>
   </table>
       </td>
     </tr>
   </tbody>
   </table>
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 0px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <div style="color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
     <p style="margin: 0; font-size: 14px; line-height: 140%;"><span style="font-size: 28px; line-height: 39.2px;"><strong style="line-height: inherit;"><span style="line-height: 39.2px; font-size: 28px;">${note}</span></strong></span></p>
   </div>
       </td>
     </tr>
   </tbody>
   </table>
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 26px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <table width="100%" cellpadding="0" cellspacing="0" border="0" style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse;" valign="top">
   <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
     <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; padding-right: 0px; padding-left: 0px;" align="center" valign="top">
       
       <img align="center" border="0" src="https://res.cloudinary.com/thito-holdings/image/upload/v1642681550/online/image-2_ghesxg.png" alt="Image" title="Image" style="line-height: inherit; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; clear: both; border: none; height: auto; float: none; width: 100%; max-width: 580px; display: inline-block;" width="580">
       
     </td>
   </tr>
   </table>
       </td>
     </tr>
   </tbody>
   </table>
   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
   </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
     </div>
   </div>
   </div>
   <div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: transparent;">
   <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #f9f9f9;">
     <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
       
   <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
   <div style="line-height: inherit; width: 100%;">
   <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent;"><!--<![endif]-->
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 28px 33px 25px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <div style="color: #444444; line-height: 200%; text-align: center; word-wrap: break-word;">
     <p style="margin: 0; font-size: 14px; line-height: 200%;"><span style="font-size: 22px; line-height: 44px;">Hello,</span><br style="line-height: inherit;"><span style="font-size: 16px; line-height: 32px;">This is a notification from </span></p>
   <p style="margin: 0; font-size: 14px; line-height: 200%;"><span style="font-size: 16px; line-height: 32px;">Our newly created <strong style="line-height: inherit;">IT Helpdesk</strong> which allows you to &nbsp; , make requests to the IT Department &nbsp; , track requests ,make and see updates, . Click the button below or visit us at  <a href="https://helpdesk.thitoholdings.co.bw" >helpdesk.thitoholdings.co.bw</a> <strong style="line-height: inherit;"></strong>&nbsp;</span></p>
   <p style="margin: 0; font-size: 14px; line-height: 200%;">&nbsp;</p>
   <p style="margin: 0; font-size: 14px; line-height: 200%;"><span style="font-size: 16px; line-height: 32px;">Thank You</span></p>
   </div>
       </td>
     </tr>
   </tbody>
   </table>
   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
   </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
     </div>
   </div>
   </div>
   <div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: transparent;">
   <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #f9f9f9;">
     <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
       
   <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
   <div style="line-height: inherit; width: 100%;">
   <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent;"><!--<![endif]-->
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 10px 10px 0px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <div align="center" style="line-height: inherit;">
   <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td style="font-family:'Open Sans',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://helpdesk.thitoholdings.co.bw" style="height:50px; v-text-anchor:middle; width:346px;" arcsize="80%" stroke="f" fillcolor="#272362"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Open Sans',sans-serif;"><![endif]-->
     <a href="https://helpdesk.thitoholdings.co.bw" target="_blank" style="line-height: inherit; box-sizing: border-box; display: inline-block; font-family: 'Open Sans',sans-serif; text-decoration: none; -webkit-text-size-adjust: none; text-align: center; color: #FFFFFF; background-color: #272362; border-radius: 40px; -webkit-border-radius: 40px; -moz-border-radius: 40px; width: auto; max-width: 100%; overflow-wrap: break-word; word-break: break-word; word-wrap: break-word; mso-border-alt: none;">
       <span style="display: block; padding: 15px 44px; line-height: 120%;"><span style="font-size: 16px; line-height: 19.2px;"><strong style="line-height: inherit;"><span style="line-height: 19.2px; font-size: 16px;">Click here to visit the help desk</span></strong></span></span>
     </a>
   <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
   </div>
       </td>
     </tr>
   </tbody>
   </table>
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 18px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="84%" style="line-height: inherit; color: #000000; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; border-top: 1px solid #d8d0d0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
     <tbody style="line-height: inherit;">
       <tr style="line-height: inherit; border-collapse: collapse; vertical-align: top;" valign="top">
         <td style="color: #000000; word-break: break-word; vertical-align: top; font-size: 0px; line-height: 0px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;" valign="top">
           <span style="line-height: inherit;">&#160;</span>
         </td>
       </tr>
     </tbody>
   </table>
       </td>
     </tr>
   </tbody>
   </table>
   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
   </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
     </div>
   </div>
   </div>
   <div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: transparent;">
   <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #f9f9f9;">
     <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f9f9f9;"><![endif]-->
       
   <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
   <div style="line-height: inherit; width: 100%;">
   <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent;"><!--<![endif]-->
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 19px 33px 40px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <div style="color: #272362; line-height: 140%; text-align: center; word-wrap: break-word;">
     <p style="margin: 0; font-size: 14px; line-height: 140%;"><span style="font-size: 24px; line-height: 33.6px;">Look forward to hearing from you </span><br style="line-height: inherit;"><span style="font-size: 24px; line-height: 33.6px;">in the near future.</span></p>
   </div>
       </td>
     </tr>
   </tbody>
   </table>
   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
   </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
     </div>
   </div>
   </div>
   <div class="u-row-container" style="line-height: inherit; padding: 0px; background-color: transparent;">
   <div class="u-row" style="line-height: inherit; Margin: 0 auto; min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: #272362;">
     <div style="line-height: inherit; border-collapse: collapse; display: table; width: 100%; background-color: transparent;">
       <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #272362;"><![endif]-->
       
   <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
   <div class="u-col u-col-100" style="line-height: inherit; max-width: 320px; min-width: 600px; display: table-cell; vertical-align: top;">
   <div style="line-height: inherit; width: 100%;">
   <!--[if (!mso)&(!IE)]><!--><div style="line-height: inherit; padding: 0px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent;"><!--<![endif]-->
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 23px 40px 10px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <div style="color: #b8b8b8; line-height: 140%; text-align: center; word-wrap: break-word;">
     <p style="margin: 0; font-size: 14px; line-height: 140%;">Call us: 399 9800<br style="line-height: inherit;">EMAIL: requests@thitoholdings.co.bw <br style="line-height: inherit;">&nbsp;Plot 5624, Real Estate Park, Lejara Road, Broadhurst Industrial.</p>
   </div>
       </td>
     </tr>
   </tbody>
   </table>
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 19px 19px 0px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="91%" style="line-height: inherit; color: #000000; border-collapse: collapse; table-layout: fixed; border-spacing: 0; mso-table-lspace: 0pt; mso-table-rspace: 0pt; vertical-align: top; border-top: 1px solid #616888; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top">
     <tbody style="line-height: inherit;">
       <tr style="line-height: inherit; border-collapse: collapse; vertical-align: top;" valign="top">
         <td style="color: #000000; word-break: break-word; vertical-align: top; font-size: 0px; line-height: 0px; mso-line-height-rule: exactly; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; border-collapse: collapse;" valign="top">
           <span style="line-height: inherit;">&#160;</span>
         </td>
       </tr>
     </tbody>
   </table>
       </td>
     </tr>
   </tbody>
   </table>
   <table style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; font-family: 'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0" valign="top">
   <tbody style="line-height: inherit;">
     <tr style="line-height: inherit; vertical-align: top; border-collapse: collapse;" valign="top">
       <td style="line-height: inherit; color: #000000; vertical-align: top; border-collapse: collapse; overflow-wrap: break-word; word-break: break-word; padding: 15px 40px; font-family: 'Open Sans',sans-serif;" align="left" valign="top">
         
   <div style="color: #bbbbbb; line-height: 140%; text-align: center; word-wrap: break-word;">
     <p style="margin: 0; font-size: 14px; line-height: 140%;"><span style="font-size: 12px; line-height: 16.8px;">Thito Holdings &copy; 2022 |&nbsp; All Rights Reserved </span></p>
   </div>
       </td>
     </tr>
   </tbody>
   </table>
   <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
   </div>
   </div>
   <!--[if (mso)|(IE)]></td><![endif]-->
       <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
     </div>
   </div>
   </div>
     <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
     </td>
   </tr>
   </tbody>
   </table>
   <!--[if mso]></div><![endif]-->
   <!--[if IE]></div><![endif]-->
   </div>`;
}
