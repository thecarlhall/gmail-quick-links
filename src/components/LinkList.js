import React from 'react'
import Link from './Link'

const renderList = linkList => accountList => onDelete => onRename => onClickGlobeCircle => {
  const _onDelete = (type, key) => () => onDelete(type, key)
  const _onRename = (type, key) => () => onRename(type, key)
  const _onClickGlobeCircle = (type, key) => () => onClickGlobeCircle(type, key)

  if (
    Object.keys(linkList).length === 0 &&
    Object.keys(accountList).length === 0
  ) {
    return (
      <div
        className="n0"
        style={{fontSize: '100%', textAlign: 'left', cursor: 'auto'}}
      >
        nothing to list: To add one, enter a gmail search and click "Add" to
        create a quick list
      </div>
    )
  } else {
    const linksArray = Object.keys(linkList).map(key => {
      const {urlHash} = linkList[key]
      return (
        <Link
          key={key}
          type="global"
          name={key}
          urlHash={urlHash}
          onDelete={_onDelete('global', key)}
          onRename={_onRename('global', key)}
          onClickGlobeCircle={_onClickGlobeCircle('global', key)}
        />
      )
    })

    const accountArray = Object.keys(accountList).map(key => {
      const {urlHash} = accountList[key]
      return (
        <Link
          key={key}
          type="account"
          name={key}
          urlHash={urlHash}
          onDelete={_onDelete('account', key)}
          onRename={_onRename('account', key)}
          onClickGlobeCircle={_onClickGlobeCircle('account', key)}
        />
      )
    })

    return linksArray.concat(accountArray)
  }
}

const displayHelp = () => {
  const message = `
To use Quick Links:

1) perform a gmail search
2) click on "Add" to give a name for that search

By default, all quick links are specific to the account where they were created.  If you have multiple gmail accounts logged in simultaneously, creating a quick link would only be visible for that account.

You may choose to have quick links available for multiple gmail accounts by clicking on the yellow sphere which then toggles to a globe icon.  A quick link with a globe icon will now show up in every gmail account you are logged in.  Clicking on the globe again will change that quick link back to a specific account quick link.

If you do not have multiple gmail accounts, toggling between the yellow sphere and the globe does nothing.
`
  alert(message)
}

const LinkList = ({
  id,
  className,
  linkList = {},
  accountList = {},
  onAdd,
  onDelete,
  onRename,
  onClickGlobeCircle
}) => {
  return (
    <div id={id} className={className}>
      <div className="r titleContainer">
        <div>
          <span
            className="glyph info"
            title="info/help"
            onClick={displayHelp}
          />
          <h2 className="pw">Quick Links</h2>
        </div>
        <div
          className="n0"
          title="Add Quick Link"
          onClick={event => onAdd(event)}
        >
        ➕
        </div>
      </div>

      <div className="listContainer">
          {renderList(linkList)(accountList)(onDelete)(onRename)(onClickGlobeCircle)}
      </div>
    </div>
  )
}

export default LinkList
