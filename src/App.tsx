import './App.css';
import Accordion from './components/Accordion';

function App() {
  const accordionItems = [
    {
      title: 'Accordion Item #1',
      content: (
        <>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Accordion Item #2',
      content: (
        <>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>

          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <i>italic</i>, or even another list like this:<strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:

        </>
      ),
    },
    {
      title: 'Accordion Item #3',
      content: (
        <>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:

        </>
      ),
    },
    {
      title: 'Accordion Item #4',
      content: (
        <>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul><strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul><strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <i>italic</i>, or even another list like this:<strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <strong>This is the third item's accordion body.</strong> It is hidden
          by default, but shown when title is clicked. It will also be hidden if
          the title is clicked again or when another item is clicked. You can
          pass HTML tags in the content such as <u>underline tag</u>,{' '}
          <i>italic</i>, or even another list like this:
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
          <ul>
            <li>Bread</li>
            <li>Eggs</li>
            <li>Milk</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="container">
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;
