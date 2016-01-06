json.lists @lists do |list|
  json.(list, :name, :percent_complete)
  json.url list_url(list)
end