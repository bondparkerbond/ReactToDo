json.items @items do |item|
  json.(item, :id, :name, :complete)
end
