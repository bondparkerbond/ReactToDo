json.lists @lists do |list|
  json.(list, :name, :percent_complete)
end