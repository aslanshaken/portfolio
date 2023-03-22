//

import { DropDocumentIcon } from '../assets';
import { IconButtonAnimate } from './animate';

export default function DropHiddenButton(props) {
  return (
    <IconButtonAnimate {...props}>
      <DropDocumentIcon sx={{ width: 22, height: 22 }} />
    </IconButtonAnimate>
  );
}
