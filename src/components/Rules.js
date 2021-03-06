import React from 'react';
import CategoryIcon from './CategoriesIcons';
import Action from './Button/Action';

const AcceptRules = ({acceptRules}) => (
  <Action
    className="accept-rules-btn"
    primary
    text='I understand. Proceed'
    onClick={e => {
      e.preventDefault();
      acceptRules();
    }}
  />
);

export const Rules = ({type, acceptRules, inEditor}) => {
  switch(type) {
    case 'ideas':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="ideas"/> Suggestion Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>Suggestions are minor features/enhancements that you would like to have in an Open Source project.</li>
            <li>Suggestions must provide all the details for the requested features to be actually built.</li>
            <li>Images, screenshots, links and examples are always welcome in this category.</li>
            <li>Never write about suggestions you have already shared before or suggestions already shared by someone else.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'sub-projects':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="sub-projects"/> Sub-Project Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>A Sub-Project is a set of new unseen features having a great impact on the project.</li>
            <li>Sub-Projects must provide great details for the features to be actually built.</li>
            <li>Images, screenshots, links, flows, mockups and examples are always mandatory in this category.</li>
            <li>In this category quality of the contents is the main factor for being accepted in Utopian.</li>
            <li>If you believe your idea does not qualify as a Sub-project use the Suggestions category instead.</li>
            <li>Never write about projects you have already shared before or projects already shared by someone else.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'development':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="development"/> Development Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>Only merged Pull Requests will be accepted or Open Source projects you maintain never posted on Utopian before, forks included as long as the fork is not just a mirror of the original one. Proof of work required.</li>
            <li>In this category you can only write if you have developed or contributed to the development.</li>
            <li>You must provide the links to the branches/forks/gists/pull requests.</li>
            <li>If your username on Github does not correspond to the Utopian username you must provide proof you are the owner by providing a screenshot of the logged in session in Github.</li>
            <li>Images, screenshots, links and examples are not necessary but preferred.</li>
            <li>Never write about code contributions you have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'blog':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="blog"/> Blog Post Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>You must provide an original format/s. You can't post about news found in the web or general thoughts, unless you have a unique and consistent format. <a href="https://utopian.io/utopian-io/@utopian-io/2xqdoa-utopian-weekly-1-the-weekly-open-source-newsletter">Example of a good format</a>.</li>
            <li>You may only write blog posts that are related to the promotion, development and functions of open-source projects.</li>
            <li>Blog posts must provide detailed content and overviews related to the open-source projects.</li>
            <li>Images, screenshots, links and examples are not necessary but preferred.</li>
            <li>Check to make sure your post does not fit in other categories (e.g. Tutorials or Copywriting).</li>
            <li>Never write blog posts you have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted. 
            <br/>We will be especially stringent for this category as we have seen abuse here in the past.
          </p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'bug-hunting':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="bug-hunting"/> Bug Hunting Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>In this category you can only report bugs you have found in an Open Source project.</li>
            <li>You must provide every possible detail to reproduce the bug.</li>
            <li>You must include for example: browsers, devices, operating systems used and similar.</li>
            <li>Never write about bugs you have already shared before or someone else have already reported before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'translations':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="translations"/> Translations Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>In order to submit a translation in Utopian, you must translate the proper amount of strings for your project size:
              <ul>
              <li><b>Small Projects</b> (those that have less than 500 strings in total) require <b>100%</b> of the project to be translated by you.</li>
              <li><b>Medium Projects</b> (those that have 500 to 1000 strings in total) require <b>at least 30%</b> of the project to be translated by you.</li>
              <li><b>Big Projects</b> (those that have more than 1000 strings in total) require <b>10-15%</b> of the project to be translated by you.</li>
              </ul>
            </li>
            <li>You must provide your translated text directly on this post or include public links.</li>
            <li>This category is meant only for translations you have updated or created for an Open Source project.</li>
            <li>You must include every possible detail to check the translations and the tools you have used to translate.</li>
            <li>Entire translations are always preferred. If you are writing about a partial translation we reserve the right to evaluate the actual work.</li>
            <li>You must be the author of the translation and provide a way to verify your work.</li>
            <li>If your username on CrowdIn or similar translation platforms does not correspond to the Utopian username you must provide proof you are the owner by providing a screenshot of the logged in session in the translation platform.</li>
            <li>Never write about translations you have already shared before or someone else have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'graphics':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="graphics"/> Graphics Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>We reserve the right to reject a graphic contribution if we believe the work is not enough to be rewarded.</li>
            <li>You must provide samples of your creations directly on this post and include public links to the full design.</li>
            <li>This category is meant only for graphics/videos/motion graphics you have realised for an Open Source project.</li>
            <li>You must include every possible detail to verify the work done.</li>
            <li>You must provide the editable files, as PSD and similar source files.</li>
            <li>T-shirts and merchandising in general are not welcome unless explicitly requested by the project owner.</li>
            <li>Never post about graphics you have already shared before or someone else have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'analysis':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="analysis"/> Analysis Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>This category is meant only for providing a data analysis you have generated for an Open Source project.</li>
            <li>You must include the results of your analyses and the reasons why you have generated them.</li>
            <li>If you are not pasting the entire analysis here you must provide public links to it.</li>
            <li>Results of the analyses, in the form of charts or tables are mandatory in this category.</li>
            <li>Never write about analyses you have already shared before or someone else have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'social':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="analysis"/> Visibility Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>This category is meant only for providing results of online social engagement, adv and similar for an Open Source project.</li>
            <li>You must include links and proofs of the visibility effort you made and write down the results.</li>
            <li>If your effort brought 0 or very little new users/contributors to the Open Source project you are invited to not write about it.</li>
            <li>You must proof of your effort. If your Utopian username does not correspond to the username used in the platforms for advertising the project, you must provide screenshots of the logged in session in these platforms. </li>
            <li>Never write about visibility efforts you have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'documentation':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="documentation"/> Documentation Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>Only merged Pull Requests on the official repository will be accepted or on a fork as long as long as the fork is not just a mirror of the original one. Proof of work required..</li>
            <li>This category is meant only when working on the Official documentation of an Open Source project.</li>
            <li>You must be the author of the documentation or the author of the changes/enhancements applied to the official documentation.</li>
            <li>Documentation category is meant only for the official project documentation. Use the Tutorials category if this is not the case.</li>
            <li>If you are not pasting the entire documentation here you must provide public links to it.</li>
            <li>You must provide proof of the work you made on the official documentation.</li>
            <li>Link Pull Requests you have submitted on Github for the official documentation.</li>
            <li>Never write about work on documentations you have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'tutorials':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="tutorials"/> Tutorial Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>Machine translated tutorials will be rejected.</li>
            <li>This category is meant only for providing tutorials about an Open Source project.</li>
            <li>Tutorials can be in any language.</li>
            <li>If your tutorial also contains a video you should use the Video Tutorials category.</li>
            <li>You must be the author of the tutorial.</li>
            <li>If you are not pasting the entire tutorial here you must provide public links to it.</li>
            <li>Never write about tutorials you have already shared before on the Steem blockchain in general.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'video-tutorials':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="video-tutorials"/> Video Tutorial Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
            <li>Video Tutorials using a machine voice will be rejected.</li>
            <li>This category is meant only for providing video tutorials about an Open Source project.</li>
            <li>Video Tutorials can be in any language. </li>
            <li>You must be the author of the video tutorial.</li>
            <li>You must embed the video directly in this post. At the moment Youtube videos are mandatory.</li>
            <li>Never post video tutorials you have already shared before on the Steem blockchain in general.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
    case 'copywriting':
      return (
        <div className="Editor__rules">
          <h2><CategoryIcon from="from-rules"  type="copywriting"/> Copywriting Rules</h2>
          {inEditor ? <p><small><a href="https://utopian.io/rules" target="_blank">Read all the rules</a></small></p> : null}
          <ul>
          <li>Linking pull requests from Github is encouraged, but is not required if not applicable. 
            <ul><li>Only merged Pull Requests will be accepted on the official repository or on a fork as long as the fork is not just a mirror of the original one.</li>
            <li>If you don't link a pull request, you will still need to provide a proof of your work, however.</li></ul></li>
          <li>This category is meant only for showing copywriting work you have completed for an Open Source project.</li>
          <li>Copywriting can be in any language.</li>
          <li>A text intro in English is always mandatory at the top of the post.</li>
          <li>You must be the author of all of your copywriting work.</li>
          <li>Never post copywriting work you have already shared before.</li>
          </ul>
          <p>Not respecting the rules will either give you lower votes or your contribution won't be accepted.</p>
          {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
        </div>
      )
  }
};
