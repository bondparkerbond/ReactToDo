json.items @items do |item|
  json.id item.id
  json.name item.name
  json.complete item.complete
end

{items: [{id: 1, name: 'some name', complete: true}, ]}