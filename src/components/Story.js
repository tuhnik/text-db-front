import React, { Component } from 'react';
let story = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a rhoncus quam. Pellentesque convallis dolor in quam faucibus dictum. Suspendisse tempor dapibus ipsum, non accumsan nulla. Maecenas eu nulla dui. Fusce lobortis ligula at sem consectetur facilisis. Vestibulum luctus in urna id semper. Aenean eleifend justo erat, vel laoreet diam consectetur tempus. Integer ut sem eu ipsum iaculis cursus. Phasellus scelerisque euismod elit. Maecenas ante nunc, sodales eget lorem ultricies, hendrerit ullamcorper felis.

Morbi in rutrum est. Donec condimentum viverra ipsum sed eleifend. Maecenas nulla risus, vestibulum vulputate hendrerit in, lobortis in lorem. Nullam at massa sed nisl aliquam dignissim in eget metus. Nam consequat et risus eget varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque nec lacus leo. Nam quis nisi velit.

Nunc lacinia id libero ac consectetur. Mauris ut odio ut sapien sodales tempor. Sed iaculis mauris at justo interdum, at congue risus dapibus. Nullam pharetra sed enim a vestibulum. Mauris eget nulla felis. Pellentesque mattis sapien vitae pulvinar feugiat. Donec feugiat neque id semper venenatis.

In nec arcu vitae turpis fringilla maximus. Vestibulum mollis, leo dignissim rhoncus venenatis, ante arcu laoreet ligula, sed ultricies nibh ex at metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur quis erat et magna ullamcorper suscipit sit amet ac dolor. Donec consectetur erat nunc, vel semper arcu commodo nec. Aenean lacinia in augue eget posuere. Etiam a fringilla sapien. Vivamus at erat eu dolor tristique finibus malesuada eu nisi.

Phasellus erat enim, porttitor non sem vel, finibus euismod ante. Donec eget turpis lorem. Quisque rutrum vitae enim id rutrum. Duis metus risus, egestas at volutpat ut, pulvinar at ligula. Aliquam dictum enim sed nisi finibus, sit amet varius risus iaculis. Pellentesque in urna nec nisl molestie rutrum. Proin sagittis magna pretium enim lobortis, ac gravida massa placerat. Nullam lobortis at elit non iaculis. Nunc tincidunt nulla maximus odio porttitor, at maximus dolor ullamcorper. Curabitur non interdum ipsum. Pellentesque porttitor mauris eu ultricies placerat. Integer arcu elit, faucibus eu lacus eget, ultrices consectetur tortor.

Duis urna tellus, bibendum in pellentesque eu, porttitor rutrum nisi. Proin sit amet ligula ac sapien porta ultricies. Curabitur turpis magna, consequat at hendrerit sed, iaculis nec lectus. Proin cursus neque eros, sit amet porta felis viverra nec. Pellentesque vehicula, purus fermentum efficitur accumsan, nisl felis maximus libero, at laoreet leo nibh eget tortor. Integer sagittis euismod orci a dapibus. Praesent id semper eros. In hac habitasse platea dictumst.

Ut scelerisque, libero a semper suscipit, sem neque aliquam quam, sit amet pharetra eros quam at dolor. Mauris vitae diam in lectus lobortis mollis. Morbi hendrerit at diam ac sollicitudin. Quisque rutrum ac tellus nec semper. Duis eget euismod urna. Nulla ac enim id ex aliquet aliquet. Nullam tempus semper elit, vitae congue erat. Vestibulum a efficitur libero. Vivamus lorem augue, malesuada sit amet lorem vulputate, malesuada sagittis libero. Proin at scelerisque mi, id sollicitudin enim. Proin tincidunt tempus interdum. Vivamus a ipsum quis sapien lacinia auctor et non arcu.

In hac habitasse platea dictumst. Praesent feugiat leo in magna commodo, id cursus quam vehicula. Fusce molestie feugiat erat et faucibus. Phasellus vitae tortor lectus. Sed placerat elit eu nisi congue ultricies ut at elit. In dapibus libero non mi ornare, sed dapibus risus tristique. Donec non tempor velit. Pellentesque ut hendrerit neque. Nunc eu tempor metus. Fusce rutrum erat eros, sed molestie sapien varius eu. Etiam ac accumsan risus, vitae scelerisque nulla. Etiam a commodo tortor, dictum pharetra massa. Duis dignissim ut odio ac vulputate. Sed in augue dui.

Sed ut condimentum massa, non aliquet ex. Nam vulputate porta ligula a ultrices. Sed molestie ultrices eros ut commodo. Vestibulum pulvinar ultrices nulla tristique finibus. Donec quis orci eu est commodo molestie vitae quis nisl. Nam odio tortor, egestas at urna vel, faucibus ullamcorper orci. Vestibulum sed sodales ex. Aliquam erat volutpat. Maecenas consequat nulla ac sem dignissim, eu bibendum lacus faucibus. Aliquam commodo leo ultricies ullamcorper vulputate. Duis purus orci, finibus ut rutrum ac, semper eget arcu.

In eget congue mauris, in varius dui. Sed ullamcorper est in risus tempor, at faucibus quam rutrum. Ut sollicitudin mattis ante a imperdiet. Aliquam sed tortor efficitur urna ultrices hendrerit eget a neque. Nam vulputate vulputate suscipit. Nam vitae nisl erat. Sed id vulputate velit. Praesent quis orci quis ante rutrum varius. Suspendisse eget auctor nulla, vel ornare tellus. Integer lacus quam, rutrum vel ante at, malesuada tincidunt sapien. Mauris dictum commodo felis imperdiet porta. Suspendisse porta justo nec arcu semper sodales. Ut ac velit cursus, pellentesque augue sodales, euismod leo1.`


class Story extends Component {
  render() {
    return (
    <div className="main">
      <aside>
      <div className="headline">«Back</div>   
      </aside>
      <article>
        <div className="headline">Story title</div>
        <div className="line"></div>
        <div className="story-text">{story}</div>
      </article>
    </div>
    );
  }
}

export default Story;
